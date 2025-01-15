
const { expect } = require("chai");
import { ethers } from "hardhat";

describe("RentalContract", function () {

   /*  async function deployRentalContract() {
        const RentItem = await ethers.getContractFactory("RentalContract");
        const rentItem = await RentItem.deploy();
        co
    } */
    let  RentalContract, rentalContract, landlord, tenant;

    beforeEach(async function () {
        [landlord, tenant] = await ethers.getSigners();
        RentalContract = await ethers.getContractFactory("RentalContract");
        rentalContract = await RentalContract.deploy(tenant.address, ethers.utils.parseEther("1"), 3600, ethers.utils.parseEther("0.5"));
        await rentalContract.deployed();
    });

    it("should set the landlord correctly", async function () {
        expect(await rentalContract.landlord()).to.equal(landlord.address);
    });

    it("should set the tenant correctly", async function () {
        expect(await rentalContract.tenant()).to.equal(tenant.address);
    });

    it("should set the rent correctly", async function () {
        expect(await rentalContract.rent()).to.equal(ethers.utils.parseEther("1"));
    });

});
