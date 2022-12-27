export const goerli = {
  id: 5,
  name: "Goerli",
  network: "goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: { http: ["https://eth-goerli.alchemyapi.io/v2"] },
    default: { http: ["https://rpc.ankr.com/eth_goerli"] },
    infura: { http: ["https://goerli.infura.io/v3"] },
    public: { http: ["https://rpc.ankr.com/eth_goerli"] },
  },
  blockExplorers: {
    etherscan: { name: "Etherscan", url: "https://goerli.etherscan.io" },
    default: { name: "Etherscan", url: "https://goerli.etherscan.io" },
  },
  testnet: true,
};
