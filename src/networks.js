module.exports = {
    qtum: {
        messagePrefix: '\x15HTMLCOIN Signed Message:\n',
        bech32: 'hc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x29,
        scriptHash: 0x64,
        wif: 0xa9
    },
    qtum_testnet: {
        messagePrefix: '\x15Qtum Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x64,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
