# web3-starter-frontend

## Description
Next.js project that bootstraps metamask wallet connection, required chain, events, error handling. Ready to build and deploy onto IPFS.

## Installation
Run `npm install --legacy-peer-deps` and verify next and IPFS are installed before attempting to run deploy scripts.
If you won't be using the react-flash-message dependency, you can remove it and no longer need `--legacy-peer-deps`.

## Usage
Before attempting to deploy on IPFS, verify you have a local node running and there are no currently pinned IPFS directories matching the frontend's npm project name. The deploy will fail.

Before any deploy, verify you have environment variables set.

### **.env:**
`NEXT_PUBLIC_CHAIN_ID=<id>`

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