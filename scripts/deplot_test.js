const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  const balance = await deployer.getBalance();

  console.log("🚀 Deployer Address:", address);
  console.log("💰 Deployer ETH Balance:", ethers.utils.formatEther(balance), "ETH");

  if (balance.lt(ethers.utils.parseEther("0.001"))) {
    console.error("❌ ERROR: Not enough ETH to cover deployment gas.");
    console.error("👉 Please fund the deployer account with Sepolia ETH from a testnet faucet.");
    process.exit(1); // Stop deployment
  }

  // Example deployment (replace with your actual contract)
  const ContractFactory = await ethers.getContractFactory("Hoodc");
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  console.log("✅ Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});