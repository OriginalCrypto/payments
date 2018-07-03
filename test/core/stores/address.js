/*global describe */
/*global it */

const addressStore = require('../../../src/core/stores/address')
const assert = require('assert')

describe('stores.address', function() {
  describe('#create()', function() {
    it('should return -1 when the value is not present', function() {
      const mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat',
            password = undefined,
            address = addressStore.create(mnemonic, password)
      assert.notEqual(undefined, address, 'address should not be undefined')
    })
  })
})
