# web3-starter-frontend

## Description
Next.js project that bootstraps metamask wallet connection, required chain, events, error handling. Ready to build and deploy onto IPFS.

## Installation
Run `npm install` and verify next and IPFS are installed before attempting to run deploy scripts.

## Usage
Before attempting to deploy on IPFS, verify you have a local node running and there are no currently pinned IPFS directories matching the frontend's npm project name. The deploy will fail.

Before any deploy, verify that you're expecting the correct chain ID from environment vars.

(goerli testnet example)
**NEXT_PUBLIC_CHAIN_ID=5** 

(localhost hardhat)
**NEXT_PUBLIC_CHAIN_ID=31337** 

## Commands:
### Running a local dev instance:
`npm run dev`

### Static build and export:
`npm run fullbuild`

### Deploying to IPFS:
`npm run ipfs:launch`

### Retrieve IPFS Link:
`npm run ipfs:link`

### Unpin most recent pin(experimental):
`npm run ipfs:unpin`

### Remove folder from IPFS files:
`npm run ipfs:remove`

### View IPFS pins:
`npm run ipfs:pins`