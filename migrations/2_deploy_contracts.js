var MonsterToken = artifacts.require("./MonsterToken.sol");
var MonsterTokenSale = artifacts.require("./MonsterTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(MonsterToken, 10000000).then(function(){
    var tokenPrice = 1000000000000000;
    return deployer.deploy(MonsterTokenSale, MonsterToken.address, tokenPrice);
  });
};