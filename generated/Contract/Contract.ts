// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class StreamCanceled extends EthereumEvent {
  get params(): StreamCanceled__Params {
    return new StreamCanceled__Params(this);
  }
}

export class StreamCanceled__Params {
  _event: StreamCanceled;

  constructor(event: StreamCanceled) {
    this._event = event;
  }

  get streamId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get senderBalance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get recipientBalance(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class StreamCreated extends EthereumEvent {
  get params(): StreamCreated__Params {
    return new StreamCreated__Params(this);
  }
}

export class StreamCreated__Params {
  _event: StreamCreated;

  constructor(event: StreamCreated) {
    this._event = event;
  }

  get streamId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get startBlock(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get kBlock(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get unlockRatio(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class StreamFunded extends EthereumEvent {
  get params(): StreamFunded__Params {
    return new StreamFunded__Params(this);
  }
}

export class StreamFunded__Params {
  _event: StreamFunded;

  constructor(event: StreamFunded) {
    this._event = event;
  }

  get streamId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WithdrawFromStream extends EthereumEvent {
  get params(): WithdrawFromStream__Params {
    return new WithdrawFromStream__Params(this);
  }
}

export class WithdrawFromStream__Params {
  _event: WithdrawFromStream;

  constructor(event: WithdrawFromStream) {
    this._event = event;
  }

  get streamId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__streamsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: Address;
  value9: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: Address,
    value9: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromAddress(this.value7));
    map.set("value8", EthereumValue.fromAddress(this.value8));
    map.set("value9", EthereumValue.fromBoolean(this.value9));
    return map;
  }
}

export class Contract__getStreamResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class Contract__balanceOfResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  _xdex(): Address {
    let result = super.call("_xdex", []);

    return result[0].toAddress();
  }

  try__xdex(): CallResult<Address> {
    let result = super.tryCall("_xdex", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  nextStreamId(): BigInt {
    let result = super.call("nextStreamId", []);

    return result[0].toBigInt();
  }

  try_nextStreamId(): CallResult<BigInt> {
    let result = super.tryCall("nextStreamId", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  streams(param0: BigInt): Contract__streamsResult {
    let result = super.call("streams", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Contract__streamsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toAddress(),
      result[9].toBoolean()
    );
  }

  try_streams(param0: BigInt): CallResult<Contract__streamsResult> {
    let result = super.tryCall("streams", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__streamsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toAddress(),
        value[9].toBoolean()
      )
    );
  }

  createStream(
    recipient: Address,
    depositAmount: BigInt,
    startBlock: BigInt,
    kBlock: BigInt,
    unlockRatio: BigInt
  ): BigInt {
    let result = super.call("createStream", [
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(depositAmount),
      EthereumValue.fromUnsignedBigInt(startBlock),
      EthereumValue.fromUnsignedBigInt(kBlock),
      EthereumValue.fromUnsignedBigInt(unlockRatio)
    ]);

    return result[0].toBigInt();
  }

  try_createStream(
    recipient: Address,
    depositAmount: BigInt,
    startBlock: BigInt,
    kBlock: BigInt,
    unlockRatio: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("createStream", [
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(depositAmount),
      EthereumValue.fromUnsignedBigInt(startBlock),
      EthereumValue.fromUnsignedBigInt(kBlock),
      EthereumValue.fromUnsignedBigInt(unlockRatio)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  isStream(streamId: BigInt): boolean {
    let result = super.call("isStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);

    return result[0].toBoolean();
  }

  try_isStream(streamId: BigInt): CallResult<boolean> {
    let result = super.tryCall("isStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getStream(streamId: BigInt): Contract__getStreamResult {
    let result = super.call("getStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);

    return new Contract__getStreamResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_getStream(streamId: BigInt): CallResult<Contract__getStreamResult> {
    let result = super.tryCall("getStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__getStreamResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  fundStream(streamId: BigInt, amount: BigInt): boolean {
    let result = super.call("fundStream", [
      EthereumValue.fromUnsignedBigInt(streamId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_fundStream(streamId: BigInt, amount: BigInt): CallResult<boolean> {
    let result = super.tryCall("fundStream", [
      EthereumValue.fromUnsignedBigInt(streamId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(streamId: BigInt): Contract__balanceOfResult {
    let result = super.call("balanceOf", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);

    return new Contract__balanceOfResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_balanceOf(streamId: BigInt): CallResult<Contract__balanceOfResult> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__balanceOfResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  withdrawFromStream(streamId: BigInt, amount: BigInt): boolean {
    let result = super.call("withdrawFromStream", [
      EthereumValue.fromUnsignedBigInt(streamId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_withdrawFromStream(
    streamId: BigInt,
    amount: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("withdrawFromStream", [
      EthereumValue.fromUnsignedBigInt(streamId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  cancelStream(streamId: BigInt): boolean {
    let result = super.call("cancelStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);

    return result[0].toBoolean();
  }

  try_cancelStream(streamId: BigInt): CallResult<boolean> {
    let result = super.tryCall("cancelStream", [
      EthereumValue.fromUnsignedBigInt(streamId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getVersion(): Bytes {
    let result = super.call("getVersion", []);

    return result[0].toBytes();
  }

  try_getVersion(): CallResult<Bytes> {
    let result = super.tryCall("getVersion", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _xdexToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateStreamCall extends EthereumCall {
  get inputs(): CreateStreamCall__Inputs {
    return new CreateStreamCall__Inputs(this);
  }

  get outputs(): CreateStreamCall__Outputs {
    return new CreateStreamCall__Outputs(this);
  }
}

export class CreateStreamCall__Inputs {
  _call: CreateStreamCall;

  constructor(call: CreateStreamCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get startBlock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get kBlock(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get unlockRatio(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateStreamCall__Outputs {
  _call: CreateStreamCall;

  constructor(call: CreateStreamCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class FundStreamCall extends EthereumCall {
  get inputs(): FundStreamCall__Inputs {
    return new FundStreamCall__Inputs(this);
  }

  get outputs(): FundStreamCall__Outputs {
    return new FundStreamCall__Outputs(this);
  }
}

export class FundStreamCall__Inputs {
  _call: FundStreamCall;

  constructor(call: FundStreamCall) {
    this._call = call;
  }

  get streamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FundStreamCall__Outputs {
  _call: FundStreamCall;

  constructor(call: FundStreamCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawFromStreamCall extends EthereumCall {
  get inputs(): WithdrawFromStreamCall__Inputs {
    return new WithdrawFromStreamCall__Inputs(this);
  }

  get outputs(): WithdrawFromStreamCall__Outputs {
    return new WithdrawFromStreamCall__Outputs(this);
  }
}

export class WithdrawFromStreamCall__Inputs {
  _call: WithdrawFromStreamCall;

  constructor(call: WithdrawFromStreamCall) {
    this._call = call;
  }

  get streamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawFromStreamCall__Outputs {
  _call: WithdrawFromStreamCall;

  constructor(call: WithdrawFromStreamCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CancelStreamCall extends EthereumCall {
  get inputs(): CancelStreamCall__Inputs {
    return new CancelStreamCall__Inputs(this);
  }

  get outputs(): CancelStreamCall__Outputs {
    return new CancelStreamCall__Outputs(this);
  }
}

export class CancelStreamCall__Inputs {
  _call: CancelStreamCall;

  constructor(call: CancelStreamCall) {
    this._call = call;
  }

  get streamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelStreamCall__Outputs {
  _call: CancelStreamCall;

  constructor(call: CancelStreamCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
