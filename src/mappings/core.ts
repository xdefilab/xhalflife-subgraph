import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts/index"
import {
    Contract,
    StreamCanceled,
    StreamCreated,
    StreamFunded,
    WithdrawFromStream
} from "../types/Contract/Contract"
import { Cancellation, Stream, Withdrawal, Fund, StreamTotalData } from "../types/schema"
import { addStreamTransaction } from "./transactions";
import { createToken, ZERO_BD, ZERO_BI, ONE_BI, convertTokenToDecimal } from "./helpers";
import { log } from '@graphprotocol/graph-ts'

export function handleStreamCreated(event: StreamCreated): void {

    let token = createToken(event.params.token);

    /* Create the stream object */
    let streamId = event.params.streamId.toString();
    let stream = new Stream(streamId);
    stream.idBigInt = event.params.streamId;
    stream.depositAmount = event.params.depositAmount;
    stream.recipient = event.params.recipient;
    stream.sender = event.params.sender;
    stream.startBlock = event.params.startBlock;
    stream.kBlock = event.params.kBlock;
    stream.unlockRatio = event.params.unlockRatio;
    stream.timestamp = event.block.timestamp;
    stream.token = event.params.token.toHexString();
    stream.cancelable = event.params.cancelable;
    stream.save();

    //update total stat
    let StreamTotalDataId = event.params.token.toHexString();
    let data = StreamTotalData.load(StreamTotalDataId);
    if (data === null) {
        data = new StreamTotalData(StreamTotalDataId);
        data.count = ONE_BI;
        data.locked = ZERO_BD;
        data.withdrawed = ZERO_BD;
        data.token = token.id;
    }
    data.count = data.count.plus(ONE_BI);
    data.locked = data.locked.plus(convertTokenToDecimal(event.params.depositAmount, token.decimals));
    data.save();

    /* Create adjacent but important objects */
    addStreamTransaction("CreateStream", event, streamId);
}

export function handleStreamFunded(event: StreamFunded): void {
    let streamId = event.params.streamId.toString();
    let stream = Stream.load(streamId);
    if (stream == null) {
        return;
    }
    stream.depositAmount += event.params.amount;
    stream.save();

    let token = createToken(Address.fromString(stream.token));

    let fund = new Fund(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    fund.amount = event.params.amount;
    fund.stream = streamId;
    fund.timestamp = event.block.timestamp;
    fund.token = stream.token;
    fund.save();

    //update total stat
    let StreamTotalDataId = stream.token;
    let data = StreamTotalData.load(StreamTotalDataId);
    if (data === null) {
        data = new StreamTotalData(StreamTotalDataId);
        data.count = ONE_BI;
        data.locked = ZERO_BD;
        data.withdrawed = ZERO_BD;
        data.token = token.id;
    }
    data.locked = data.locked.plus(convertTokenToDecimal(event.params.amount, token.decimals));
    data.save();

    addStreamTransaction("FundStream", event, streamId);
}

export function handleWithdrawFromStream(event: WithdrawFromStream): void {
    let streamId = event.params.streamId.toString();
    let stream = Stream.load(streamId);
    if (stream == null) {
        return;
    }

    let withdrawal = new Withdrawal(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    withdrawal.amount = event.params.amount;
    withdrawal.stream = streamId;
    withdrawal.timestamp = event.block.timestamp;
    withdrawal.token = stream.token;
    withdrawal.save();

    let token = createToken(Address.fromString(stream.token));
    //update total stat
    let data = StreamTotalData.load(stream.token);
    let dealAmount = convertTokenToDecimal(event.params.amount, token.decimals);
    data.locked = data.locked.minus(dealAmount);
    data.withdrawed = data.withdrawed.plus(dealAmount);
    data.save();

    addStreamTransaction("WithdrawFromStream", event, streamId);
}

export function handleStreamCanceled(event: StreamCanceled): void {
    let streamId = event.params.streamId.toString();
    let stream = Stream.load(streamId);
    if (stream == null) {
        return;
    }

    let cancellation = new Cancellation(streamId);
    cancellation.recipientBalance = event.params.recipientBalance;
    cancellation.senderBalance = event.params.senderBalance;
    cancellation.timestamp = event.block.timestamp;
    cancellation.token = stream.token;
    cancellation.txhash = event.transaction.hash.toHex();
    cancellation.save();

    stream.cancellation = streamId;
    stream.save();

    let token = createToken(Address.fromString(stream.token));
    //update total stat
    let data = StreamTotalData.load(stream.token);
    data.locked = data.locked.minus(convertTokenToDecimal(event.params.senderBalance, token.decimals));
    data.withdrawed = data.withdrawed.plus(convertTokenToDecimal(event.params.recipientBalance, token.decimals));
    data.save();

    addStreamTransaction("CancelStream", event, streamId);
}
