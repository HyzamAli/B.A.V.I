var web3 = require("./web3");
var campaignFactory = require("./build/CampaignFactory.json");
//const address = require('./deploy.js');


const address = '0xCa87A2D6a41Ae583E6De758fa225008707d1aBA2';



const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    address
);


module.exports = instance;
