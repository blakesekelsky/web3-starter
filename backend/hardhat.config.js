require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: __dirname+'/.env'});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
        url: process.env.GOERLI_URL,
        accounts: [process.env.PRIV_KEY,]
    }
  }
};
