require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const private_key = process.env.PRIVATE_KEYS || "";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,  
      accounts: private_key.split(",")
    }
  },
};
