const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/EventFactory.json');

//deploy to rinkeby
const provider = new HDWalletProvider(
  'length peace seat balance pet note copy impose divert rifle lock hobby',
  'https://rinkeby.infura.io/E1fvqRqLEjEPuOSVxDbY'
);

//deploy to local ganache
const provider2 = new Web3.providers.HttpProvider(
  'http://127.0.0.1:7545'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '5000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
