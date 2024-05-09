require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.FACTORY_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 8453,
    },
  },
  etherscan: {
    apiKey: {
      baseSepolia: process.env.BASE_SCAN_API_KEY,
    },
  },
};
``;
