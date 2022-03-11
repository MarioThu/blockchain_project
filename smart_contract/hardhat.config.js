require('@nomiclabs/hardhat-waffle');

module.exports = 
{
  solidity: '0.8.0',
  networks :{
    ropsten :{
      url: 'https://eth-ropsten.alchemyapi.io/v2/vB-XotXpjhCnfbCjBb5PLmHcmVXlangk',
      accounts:['5445478a2d7716133d1a3609850a222d8ff9a75f3bfc3a68f8d59484841141a4']
    }
  }
}