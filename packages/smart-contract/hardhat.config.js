require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.19',
  networks: {
    mumbai: {
      url: process.env.MUMBAI_API,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
