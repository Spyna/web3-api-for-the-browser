const hre = require('hardhat');
require('dotenv').config();

async function main() {
  const contract = await hre.ethers.deployContract('Counter');

  await contract.waitForDeployment();

  console.log(`Contract deployed to ${contract.target}`);
}

main()