
const main = async ()=> {
    const TestContract = await hre.ethers.getContractFactory("TestContract");
    const testContract = await TestContract.deploy();
  
    await testContract.deployed();
  
    console.log("Transactions deployed to:", testContract.address);
  }
  
  const runMain = async () => {
    try {
      await main(); 
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
  runMain();
  