const bip39 = require('bip39'),
      hdkey = require('hdkey'),
      util = require('ethereumjs-util')


function create (mnemonic, password, index=0) {
    
    const path = "m/44'/0'/0'/0/"

    try {
     path += index.toString(10);

     //add additional error checking
    
    } catch (error) {
        return(-1)
    }

    const address = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic, password)).derive(path).address
    if (util.isValidAddress(address)) return address;
   
    return -1
}

module.exports = {create}