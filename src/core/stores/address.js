const bip39 = require('bip39'),
      hdkey = require('hdkey'),
      util = require('ethereumjs-util')

function create (mnemonic, index, password) {
    const path = ("m/44'/0'/0'/0/${index}", index)
    const { privateToAddress } = util

    const address = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic, password)).derive(path).address
    if (util.isValidAddress(address))
    return address
    else
    return -1
}

module.exports = {create}