require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy razor mean protect inner drive equal gasp'; 
let testAccounts = [
"0x2ed61c58b853ba35216fd1d76c14074a17b26861ed8a67d27c1a9d78e067ba3c",
"0xa04cfed82fefad60a8d260adcd5cad7e3b9bc87e917ad7fdd236e8c7fdb43738",
"0xadfa220c530a35b3edc42b188af9d6c0a99d88887107f4ed160084d46c5f9fe8",
"0xcd01cc2040e1e415aba5144dc2882c648bb02fd74100e0f3c2de737a9772c723",
"0xcea9dce73a94c3761ec5e8921b2849b3a30bedd17a97602980516446602dc14c",
"0x8d9ee00ec1244906717bef851d91df9067b39ed03c2b0cc1b90393fb2b290ede",
"0x9a03ae0254e7e967318d040bf439d00fc99ef1ebc107b8668a039065d0c8b43b",
"0x8c8d536c7b26566daa234c7c628468a2f844171bf4f45c97a0e20b62a26ef90b",
"0x20a2bb8140d26890f720d0575f4813ef13299db3ac1e87263e7137fa54be8ffa",
"0x8948207bc82abf92253a966a24fc96d75f5475a6cde23b6b5d936654234ef0bf"
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
            version: '^0.5.11'
        }
    }
};
