module.exports = {
rpc: {
host:"localhost",
port:8543
},
networks: {
development: {
host: "localhost", //our network is running on localhost
port: 8545, // port where your blockchain is running
network_id: "123456",
from: "0x4e635f8347b45c456085da391a0b0e53437f4616", // use the account-id generated during the setup process
gas: 20000000
}
}
};
