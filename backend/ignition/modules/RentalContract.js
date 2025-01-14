// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("RentalContractModule", (m) => {
  const landlord = m.getParameter("landlord");
  const tenant = m.getParameter("tenant");
  const deposit = m.getParameter("deposit");
  const leaseTerm = m.getParameter("leaseTerm");
  const rentAmount = m.getParameter("rentAmount");

  const rentalContract = m.contract("RentalContract", [landlord, tenant, deposit, leaseTerm, rentAmount]);

  return { rentalContract };
});