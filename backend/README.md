# web3-starter-backend

## Description
Bootstrapped hardhat project ready to deploy on localhost, goerli testnet, and verify on etherscan.

## Installation
Run `npm install` and verify hardhat is installed before attempting to run scripts.

## Usage
Before attempting to deploy locally, verify a hardhat node is running and you have the following environment variables set. 

### **.env:**
`GOERLI_URL=<url>`

`PRIV_KEY=<key>` 

`ETHERSCAN_KEY=<api key>`

## Commands:
### Running a local node:
`npm run node`

### Testing contracts:
`npm run test`

### Deploying to localhost:
`npm run deploy`

### Deploying to goerli testnet:
`npm run deploy-goerli`

### Verifying on Etherscan:
`addr=<deployed address> name=<log file name> npm run verify-goerli`


