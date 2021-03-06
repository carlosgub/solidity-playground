module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8544,
            network_id: "*", // Match any network id
            gas: 4000000
        },
        testnet: {
            host: "localhost",
            port: 8547,
            network_id: "4",
            gas: 4000000,
            gasPrice: 21000000111
        },
        compilers: {
            solc: {
                version: "0.4.18",  // ex:  "0.4.20". (Default: Truffle's installed solc)
            }
        }
    }
}
