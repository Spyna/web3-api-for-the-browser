import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider;
  }
}

const COUNTER_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
  "function increment() public",
  "function decrement() public",
  "function count() public view returns (uint256)",
];

async function getContract() {
  const provider = new ethers.BrowserProvider(
    window.ethereum as ethers.Eip1193Provider
  );
  const signer = await provider.getSigner();
  await window.ethereum?.request({
    method: "eth_requestAccounts",
  });
  return new ethers.Contract(COUNTER_CONTRACT_ADDRESS, abi, signer);
}

async function increment() {
  const contract = await getContract();
  const tx = await contract.increment();
  await tx.wait();
  await getCounter();
}

async function decrement() {
  const contract = await getContract();
  const tx = await contract.decrement();
  await tx.wait();
  await getCounter();
}

async function getCounter() {
  const provider = new ethers.BrowserProvider(
    window.ethereum as ethers.Eip1193Provider
  );
  const contract = new ethers.Contract(COUNTER_CONTRACT_ADDRESS, abi, provider);
  const count: BigInt = await contract.count();
  document.getElementById("counter")!.innerHTML = count.toString();
}

async function main() {
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  incrementButton?.addEventListener("click", increment);
  decrementButton?.addEventListener("click", decrement);
  await getCounter();
}

addEventListener("DOMContentLoaded", main);
