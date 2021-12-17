const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const accounts = await hre.ethers.getSigners();
  const Proxy = await ethers.getContractFactory("Proxy");
//   const proxy = await Proxy.deploy();
//   await proxy.deployed();
  const proxyAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const proxy = new ethers.Contract(proxyAddress, Proxy.interface, accounts[0]);   

  const Logic1 = await ethers.getContractFactory("Proxy");
//   const logic1 = await Logic1.deploy();
//   await logic1.deployed();
  const logic1Address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const logic1 = new ethers.Contract(logic1Address, Logic1.interface, accounts[0]);

  const Logic2 = await ethers.getContractFactory("Proxy");
//   const logic2 = await Logic2.deploy();
//   await logic2.deployed();
  const logic2Address = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  const logic2 = new ethers.Contract(logic2Address, Logic2.interface, accounts[0]);

  await proxy.upgradeTo(logic1Address);
  const resultA = await proxy.calculateValues(18,16);
  console.log("Logic 1 Function: ", resultA);

  await proxy.upgradeTo(logic2Address);
  const resultB = await proxy.calculateValues(18,16);
  console.log("Logic 2 Function: ", resultB);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
