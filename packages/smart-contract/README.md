# Web3 api fro the browser smart contracts

This project contains the smart contract for the talk: Web3 api for the browser.

The contract is a simple counter.

## install 

```bash
npm install
```

## compile 

```bash
npx hardhat compile
```

## deploy 

```bash
npx hardhat run scripts/deploy.js
```

## deploy in a local network

Launch a local network with: (in the project folder)

```bash
npx hardhat node
```

in a different terminal run:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## test 

```bash
npx hardhat test
```
