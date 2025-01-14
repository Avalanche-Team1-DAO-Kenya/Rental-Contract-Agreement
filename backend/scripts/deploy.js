// scripts/deploy.js

async function main() {
    // Get the contract to deploy
    const RentalContract = await ethers.getContractFactory("RentalContract");

    // Deploy the contract
    const rentalContract = await RentalContract.deploy();

    await rentalContract.deployed();

    console.log("RentalContract deployed to:", rentalContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });