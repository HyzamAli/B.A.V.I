const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require('../ethereum/build/CampaignFactory.json');

const provider = new HDWalletProvider(
    '',
    'https://localhost:8545'
);
console.log('hi');
//const web3 = new Web3(provider);
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
        .deploy({ data: '0x' + campaignFactory.bytecode })
        .send({ from: accounts[0], gas: '3000000' });

    console.log('Contract deployed to: ', result.options.address);
}

deploy();
