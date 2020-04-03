var web3 = require("./web3");
var campaignFactory = require("./build/CampaignFactory.json");
//const address = require('./deploy.js');


const address = '0x44D8d4C1fF1D7601b54937d9332057C1167De8B6';



const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    address
);


module.exports = instance;
