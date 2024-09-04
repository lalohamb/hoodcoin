async function main() {
  // Fetch contract to deploy
  const Hoodc = await ethers.getContractFactory("Hoodc")

  // Deploy contract
  const token = await Hoodc.deploy("Hood Coin", "HOODc", 100000)
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
