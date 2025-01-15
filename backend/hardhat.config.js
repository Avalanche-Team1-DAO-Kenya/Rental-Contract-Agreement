require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks:{
    avalanche:{
      url: "https://testnet-fuzzyameth-z33bd.avax-test.network/ext/bc/2pEEUkd7QjYw1Zhjhw9AmPYZJdDEQHA1iyHv4XdRn64U69iWmv/rpc?token=84b12355e4b408bbb56ce6780bf0495f2672cf66bb613f79ce961ad695dcf220",
      chainId: 2590,
      accounts: [`${process.env.PRIVATE_KEY}`]
  }
  
  }
};
