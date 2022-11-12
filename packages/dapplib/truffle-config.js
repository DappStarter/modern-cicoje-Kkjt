require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue random pitch hospital heavy civil army giant'; 
let testAccounts = [
"0xe36a2b3e06677dffce6f5d503b763c672881a9a1aeecb3cb7148f855c9fa71bd",
"0x409debd236546ac6a6d64345011d5b391c58f652e2e3b4054907c54b960ce8a1",
"0xd35802f63f6906d32a5d8f0c65d4dd6fcb07404642f5db925e16baded7472a11",
"0x91f3a7dedae66665582794f78606cc1597fae28501d99a10c2b8222184405b94",
"0xb082784c39200fb6ef51339745b0ab0ec423d5935b311671b0f4301d482d1bed",
"0x967ce2791a945a07f4805f90f027095efb354235d4b53f339870acfe74d78937",
"0x55c3ab89bab27fc6eac00e99bcf01dada0a44fbdc8dd82948ddbbfe179e250d3",
"0xa80201251c1dfc5fa190dc6778021a7f76507d45c752739d385b0e18fc451d28",
"0x0c3c07eb920efde5a25192408e11590b8587b20dd665017719220a24959d6a95",
"0x27b2cd4ca3ff0156f17d1ea038ef3428eb17dc161c634d43c9ff457a76c39bab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

