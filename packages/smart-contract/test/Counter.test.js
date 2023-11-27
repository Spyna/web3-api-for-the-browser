const { ethers } = require("hardhat");
const { expect } = require("chai");
const { before } = require("mocha");

describe("Counter contract", () => {
  let contract;

  before(async () => {
    contract = await ethers.deployContract("Counter");
  });

  it("should increment the counter", async () => {
    const tx = await contract.increment();
    await tx.wait();
    expect(await contract.count()).to.equal(1);
  });

  it("should decrement the counter", async () => {
    const tx = await contract.decrement();
    await tx.wait();
    expect(await contract.count()).to.equal(0);
  });
});
