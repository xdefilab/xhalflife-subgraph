# xhalflife-subgraph

## kovan环境

1. xdex 0xaDBc525ace6ed9c5195071f29036e7ecCd1DC158
2. halflife, 0x97721b4c8BF7AEDf936AF11D18e2f1eF5AF4836B
3. stream, 0xa031f03424Aa6278afB74bf5E036a00F159c46D2

## Build

### init

graph init --from-contract 0x97721b4c8BF7AEDf936AF11D18e2f1eF5AF4836B --network kovan --abi build/XHalfLife.json  xdefilab/xhalflifesubgraph

yarn codegen

## Query

### streams
```
{
  streams(first: 10) {
    id
    sender
    recipient
    depositAmount
    startBlock
    kBlock
    unlockRatio
    timestamp
    txs(first: 10, orderBy: timestamp, orderDirection: desc) {
      block
      event
      from
      timestamp
      to
      txhash
    }
  }
}

```

### streamsByRecipient
```
{
  streams(first: 10, where: {recipient: "0x54be6df7b1c9fee57af2e8255bf319da65e4c0c0"}) {
    id
    sender
    recipient
    depositAmount
    startBlock
    kBlock
    unlockRatio
    timestamp
    txs(first: 10, orderBy: timestamp, orderDirection: desc) {
      block
      event
      from
      timestamp
      to
      txhash
    }
  }
}

```

### streamsBySender
```
{
  streams(first: 10, where: {sender: "0xa031f03424aa6278afb74bf5e036a00f159c46d2"}) {
    id
    sender
    recipient
    depositAmount
    startBlock
    kBlock
    unlockRatio
    timestamp
    txs(first: 10, orderBy: timestamp, orderDirection: desc) {
      block
      event
      from
      timestamp
      to
      txhash
    }
  }
}

```

### withdrawalsByStreamId
```
{
  streams(where: {id: 2}) {
    id
    withdrawals(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      amount
      timestamp
      token {
        name
        symbol
        decimals
      }
    }
  }
}

```

### fundsByStreamId
```
{
  streams(where: {id: 2}) {
    id
    funds(first: 10, orderBy: timestamp, orderDirection: desc) {
      amount
      timestamp
      token {
        name
        symbol
        decimals
      }
    }
  }
}

```

### cancellationByStreamId
```
{
  streams(where: {id: 2}) {
    id
    cancellation {
      recipientBalance
      senderBalance
      timestamp
      txhash
      token {
        name
        symbol
        decimals
      }
    }
  }
}
```