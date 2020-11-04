import { Token } from "../generated/schema";

export function addToken(address: string): void {
    let token = Token.load(address);
    if (token != null) {
        return;
    }

    /* Mainnet */
    token = new Token(address);

    if (address == "0xb6ed7644c69416d67b522e20bc294a9a9b405b31") {
        token.name = "0xBitcoin Token";
        token.symbol = "0xBTC";
        token.decimals = 8;
    } else if (address == "0x0d8775f648430679a709e98d2b0cb6250d2887ef") {
        token.name = "Basic Attention Token";
        token.symbol = "BAT";
        token.decimals = 18;
    } else if (address == "0x514910771af9ca656af840dff83e8264ecf986ca") {
        token.name = "ChainLink Token";
        token.symbol = "LINK";
        token.decimals = 18;
    } else if (address == "0x6b175474e89094c44da98b954eedeac495271d0f") {
        token.name = "Dai Stablecoin";
        token.symbol = "DAI";
        token.decimals = 18;
    } else if (address == "0xdd974d5c2e2928dea5f71b9825b8b646686bd200") {
        token.name = "Kyber Network Crystal";
        token.symbol = "KNC";
        token.decimals = 18;
    } else if (address == "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2") {
        token.name = "Maker";
        token.symbol = "MKR";
        token.decimals = 18;
    } else if (address == "0xe2f2a5c287993345a840db3b0845fbc70f5935a5") {
        token.name = "mStable USD";
        token.symbol = "mUSD";
        token.decimals = 18;
    } else if (address == "0x408e41876cccdc0f92210600ef50372656052a38") {
        token.name = "Republic Token";
        token.symbol = "REN";
        token.decimals = 18;
    } else if (address == "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe") {
        token.name = "Stable USD";
        token.symbol = "USDS";
        token.decimals = 6;
    } else if (address == "0x57ab1e02fee23774580c119740129eac7081e9d3") {
        token.name = "Synth sUSD";
        token.symbol = "sUSD";
        token.decimals = 18;
    } else if (address == "0xdac17f958d2ee523a2206206994597c13d831ec7") {
        token.name = "Tether USD";
        token.symbol = "USDT";
        token.decimals = 6;
    } else if (address == "0x0000000000085d4780b73119b644ae5ecd22b376") {
        token.name = "TrueUSD";
        token.symbol = "TUSD";
        token.decimals = 18;
    } else if (address == "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48") {
        token.name = "USD Coin";
        token.symbol = "USDC";
        token.decimals = 6;
    } else if (address == "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599") {
        token.name = "Wrapped Bitcoin";
        token.symbol = "WBTC";
        token.decimals = 8;
    } else if (address == "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2") {
        token.name = "Wrapped Ether";
        token.symbol = "wETH";
        token.decimals = 18;
    } else {
        token.name = null;
        token.symbol = null;
        token.decimals = 0;
    }

    /* Kovan */
    if (address == "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa") {
        token.decimals = 18;
        token.name = "TestnetDAI";
        token.symbol = "DAI";
    }

    token.save();
}
