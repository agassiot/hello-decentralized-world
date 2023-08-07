
<h1 align="left"> 'Hello' Smart Contract </h1>  
<p align="right">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg?style=plastic" target="_blank"/>
    <img src="https://img.shields.io/badge/Solidity-%23363636.svg?style=plastic&logo=solidity&logoColor=white" target="_blank"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white" target="_blank"/>
    <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=plastic&logo=Ethereum&logoColor=white" />
</p>



## Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Use](#use)
- [Credits](#credits)
- [Features](#features)
- [Struggles](#struggles)
- [Links](#links)
        

## Description

A "Hello, World" smart contract. Because every language needs a "Hello, World."

### Installation

First, you need a "cloud" to deploy your contract on. In the command line, run: npx hardhat node

You're rich! Now (in a separate terminal window) we run the command: npx hardhat run scripts/deploy-hello.ts --network localhost

We see "Say Hi: Hello, Decentralized World" is printed to the terminal. Navigate back to our local ethereum network, and we see the following:
![hello-transaction](https://github.com/agassiot/hello-decentralized-world/assets/61921580/3587e51f-f8e2-4a03-853b-f994c2f1d165)

We can now import one of the test accounts into MetaMask using one of the private keys, and connect it to localhost:



Then we run `npx webpack` and spin up a local server. Open a browser, navigate to your page, and witness the end-result:



### Use

Demonstration of a simple, bare-bones Ethereum contract. 

### Credits

Andrew Gassiot

### Features

Deploy the contract. Run the Hardhat test. Experience the thrill.

### Struggles

Hardhat doesn't play well with Jest so f*** it, guess we are using Chai:

![hello-world-test](https://github.com/agassiot/hello-decentralized-world/assets/61921580/3db85f4f-387b-4ba1-96ed-7b5e8a4bbb89)



### Links

Github Page https://github.com/agassiot  
Github Repository https://github.com/agassiot/hello-decentralized-world 
