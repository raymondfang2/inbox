// deploy code will go here
//https://rinkeby.infura.io/v3/76f77965cabb487cb318b652f87611ac
//pilot grocery ivory friend brand liberty dose combine limit attend connect satisfy
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider('pilot grocery ivory friend brand liberty dose combine limit attend connect satisfy',
    'https://rinkeby.infura.io/v3/76f77965cabb487cb318b652f87611ac');
const web3 = new Web3(provider);

const deploy = async () => {
    // Get a list of accounts
    const accounts = await web3.eth.getAccounts()
    console.log('Attempting to deploy from account - ', accounts[0])
    //Use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data : bytecode, arguments: ['Hi there!'] } )
        .send( {from: accounts[0], gas: '1000000'});

    console.log('Deployed Address - ', inbox.options.address);
    //0xa7152344fbc3d549c2906704f9F991C6e48d4e1B
    //0xa7152344fbc3d549c2906704f9F991C6e48d4e1B
};
deploy();


