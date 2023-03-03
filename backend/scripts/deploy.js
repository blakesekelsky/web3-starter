const hre = require("hardhat");
const fs = require('fs-extra');

// Path to frontend's abis folder
const addressJSONPath = `${__dirname}/../../frontend/pages/abis/SmartContracts.json`;
const backendABIPath = `${__dirname}/../artifacts/contracts/`;
const frontendABIPath = `${__dirname}/../../frontend/pages/abis/`;

async function main() {
  // Deploy contracts
  const SampleContract = await hre.ethers.getContractFactory("SampleContract");
  const sampleContract = await SampleContract.deploy();

  await sampleContract.deployed();

  // Clears out ../../frontend/pages/abis/ directory
  removeDir(frontendABIPath);

  // Copies ../artifacts/contracts/ -> ../../frontend/pages/abis/
  copyDir(backendABIPath, frontendABIPath);

  // Add smart contract addresses to JSON file
  // Saves to -> ../../frontend/pages/abis/SmartContracts.json
  let smartContractAddressess = {
    SampleContract: sampleContract.address
  };
  saveAddress(addressJSONPath, smartContractAddressess);

  console.log(
    `Addresses Imported: ${JSON.stringify(smartContractAddressess)}`
  );
}

// Delete directory
function removeDir(dirPath) {
  fs.removeSync(dirPath);
}

// Copy directory to path
function copyDir(oldPath, newPath) {
  fs.copySync(oldPath, newPath, { overwrite: true }, (err) => {
    if (err) {
      return console.log(err);
    }
  })
}

// Write data to file at path
function saveAddress(path, data) {
  fs.ensureFile(path, () => {
    fs.writeJSON(path, data, { overwrite: true }, (err) => {
      if (err) {
        return console.log(err);
      }
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
