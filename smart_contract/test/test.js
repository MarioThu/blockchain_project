const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const TestContract = await ethers.getContractFactory("TestContract");

    const hardhatToken = await TestContract.deploy();

    const ownerBalance = await hardhatToken.balanceOfToken(owner.address);
    expect(await hardhatToken.totalSupplyToken()).to.equal(ownerBalance);
  });
});