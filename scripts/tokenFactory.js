const hre = require("hardhat");

async function main() {

  await hre.run('compile');

  const CustomTokenFactory = await hre.ethers.getContractFactory("CustomTokenFactory");
  const customTokenFactory = await CustomTokenFactory.deploy();

  const CustomToken = await hre.ethers.getContractFactory("CustomToken");
  const customToken = await CustomToken.deploy(customTokenFactory.address);

  await customTokenFactory.waitForDeployment();
  await customToken.waitForDeployment();
  
  console.log("factory deployed to:", customTokenFactory.target);
  console.log("token deployed to:", customToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});