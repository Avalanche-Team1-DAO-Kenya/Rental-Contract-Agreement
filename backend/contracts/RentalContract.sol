// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract RentalContract {
    address public landlord;
    address public tenant;
    uint public deposit;
    uint public leaseTerm;
    uint public rentAmount;
    uint public startTime;
    bool public rentActive;

    event ActivateLease(address indexed landlord,address indexed tenant,uint startTime);
    event RentPaid(address indexed payer, uint amount);
    event LeaseTerminated(address indexed landlord);

    modifier onlyLandlord(){
        require(msg.sender == landlord,"Only the landlord can perform this action");
        _;
    }
    modifier onlyTenant(){
        require(msg.sender == tenant,"Only the tenant can perform this action");
        _;
    }
    

    constructor(
        address _tenant,
        uint _rentAmount,
        uint _leaseTerm,
        uint _deposit
    ) {
        landlord = msg.sender;
        tenant = _tenant;
        rentAmount = _rentAmount;
        leaseTerm = _leaseTerm;
        deposit = _deposit;
    }

    function activatelease() external onlyLandlord{
        rentActive = true;
        startTime = block.timestamp;
        emit ActivateLease(landlord, tenant, startTime);
    }

    function payRent() external payable onlyTenant{
        require(rentActive,"The lease is not currently active.");
        require(msg.value == rentAmount,"Incorrect rent amount sent.");
        emit RentPaid(msg.sender, msg.value);

    }

    function terminateContract() external onlyLandlord{
        require(block.timestamp >= startTime + leaseTerm,"The lease term has not yet ended.");
        rentActive = false;
        emit LeaseTerminated(landlord);
    }

    function withdrawFunds() external onlyLandlord{
        payable(landlord).transfer(address(this).balance);
    }
}