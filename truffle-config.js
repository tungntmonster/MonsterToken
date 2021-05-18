var HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = 'ff5dacadca0bbca44dcfb3a2b4278a313afdf8edd6ca3fdc7be5479bf9876708';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "54.245.52.135",
      port: 8545,
      network_id: "*" // Match any network id
    },
    monster: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "http://54.245.52.135:8545")
      },
      network_id: "*",
      gas: 500000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
