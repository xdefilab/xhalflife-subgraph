import { ethereum } from "@graphprotocol/graph-ts/index";

import { StreamTransaction } from "../types/schema";

export function addStreamTransaction(name: string, event: ethereum.Event, streamId: string): void {
    let streamTransaction = new StreamTransaction(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    streamTransaction.event = name;
    streamTransaction.block = event.block.number.toI32();
    streamTransaction.from = event.transaction.from;
    streamTransaction.stream = streamId;
    streamTransaction.streamId = streamId;
    streamTransaction.timestamp = event.block.timestamp;
    streamTransaction.to = event.transaction.to;
    streamTransaction.txhash = event.transaction.hash.toHex();
    streamTransaction.save();
}
