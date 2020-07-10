var web3 = require("./web3");
var Campaign = require("./build/Campaign.json");

module.exports = (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    );
};

