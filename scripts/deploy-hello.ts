import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { Contract } from "ethers";

async function deploy() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();

    return hello;
}

async function sayHi(hello: Contract) {
    console.log("Say Hi:", await hello.hello());
}

deploy().then(sayHi);
