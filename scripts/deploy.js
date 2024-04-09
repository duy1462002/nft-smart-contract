const hre = require("hardhat");

async function main() {
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    await lock.getDeployedCode();

    console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.getAddress}`)
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
})