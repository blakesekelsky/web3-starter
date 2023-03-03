# **Web3-Starter**

**Bootstrapped hardhat + next.js fullstack project to reduce the time and complexity to developing dApps.**

# ([Frontend Readme](frontend/README.md) | [Backend Readme](backend/README.md))

### **Standalone local deployment**
Verify that you have all of the necessary dependencies for both backend and frontend projects.

#### **web3-starter-backend:**
1. Run a local hardhat node with `npm run node` .
2. Deploy the contract with `npm run deploy` .

#### **web3-starter-frontend:**
1. Verify that `frontend/pages/abis` now contains a directory `SampleContract.sol/`, and the `SmartContracts.json` file. This is the example contract I've written for the starter code to interact with.
2. Run a dev instance with `npm run dev`


### **Standalone IPFS/Goerli + Etherscan verified deployment**
Verify that you have all of the necessary dependencies for both backend and frontend projects.
#### **web3-starter-backend:**
1. Verify that your .env contains GOERLI_URL, PRIV_KEY, and ETHERSCAN_KEY
2. Deploy the contract to goerli testnet with `npm run deploy-goerli` .
3. Verify the contract to etherscan with `addr=<deployed address> name=SampleContract npm run verify-goerli` , there should be a log file created after it processes.

#### **web3-starter-frontend:**
1. Verify that `frontend/pages/abis` now contains a directory `SampleContract.sol/`, and the `SmartContracts.json` file. 
2. Set an environment variable `NEXT_PUBLIC_CHAIN_ID=5` to connect to the goerli testnet.
3. Build and export the next.js project with `npm run ipfs:launch` .
4. Retrieve the link with `npm run ipfs:link` and try to connect with the brave browser.
5. End with `npm run ipfs:unpin` then `npm run ipfs:remove` .