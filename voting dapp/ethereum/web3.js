//import Web3 from 'web3';
var Web3 = require("web3");
let web3;
/*
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // we are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://localhost:8545'
    );
    web3 = new Web3(provider);
}
*/
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//export default web3;
module.exports = web3;