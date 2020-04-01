var web3 = require("./web3");
var campaignFactory = require("./build/CampaignFactory.json");

// const address = '0x0dcb8E8BbeF65aE548F06bb37c9e94cEaF836d60';
const address = '0xf835cd894e3Fc6c0136Da2C40dEea9A84aa47398';
// const address = '0x29e2f41270fC154E4Cc334276EF5e10862d51256';
// const address = '0xA34bD3cc52A954e3225635FcF6ae6f6dB6C1565E';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    address
);

module.exports = instance;
