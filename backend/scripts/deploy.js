const hre = require("hardhat");
const fs = require('fs-extra');

// Path to frontend's abis folder
const buildPath = `${__dirname}/../artifacts/contracts/`;
const frontendABIsPath = `${__dirname}/../../frontend/pages/abis/`;
const frontendContractAddressesPath = `${__dirname}/../../frontend/pages/abis/SmartContracts.json`;

async function main() {
  // Deploy contracts
  const SampleContract = await hre.ethers.getContractFactory("SampleContract");
  const sampleContract = await SampleContract.deploy();

  await sampleContract.deployed();

  // Build object with deployed contract addresses
  let deployedContracts = {
    SampleContract: sampleContract.address
  };

  // Export build files to frontend 
  exportBuild(buildPath, frontendABIsPath, frontendContractAddressesPath, deployedContracts);

  console.log(
    `Addresses Imported: ${JSON.stringify(deployedContracts)}`
  );
}

function exportBuild(buildPath, frontendABIsPath, frontendContractAddressesPath, deployedContracts) { 
  // Clears out ../../frontend/pages/abis/ directory
  removeDir(frontendABIsPath);

  // Copies ../artifacts/contracts/ -> ../../frontend/pages/abis/
  copyDir(buildPath, frontendABIsPath);

  // Add deployed contract addresses to JSON file
  // Saves to -> ../../frontend/pages/abis/SmartContracts.json
  saveAddress(frontendContractAddressesPath, deployedContracts);
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
