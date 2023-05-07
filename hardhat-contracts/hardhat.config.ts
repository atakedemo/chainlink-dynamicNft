import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { API_URL_GOERLI, API_URL_MUMBAI,PRIVATE_KEY, API_KEY_MUMBAI } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.1",
      },
      {
        version: "0.8.19",
        settings: {},
      },
    ]
  },
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: API_URL_MUMBAI,
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: API_URL_GOERLI,
      accounts: [PRIVATE_KEY]
   }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: API_KEY_MUMBAI
    }
  }
};