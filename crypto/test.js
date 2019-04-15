let encryptionHelper = require("./encryptionhelper")
var assert = require('assert')

let story = 'F34FBB464A4D3456F747'
let algorithm = encryptionHelper.CIPHERS.AES_128_CTR


encryptionHelper.getKeyAndIV(Buffer.from('FBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFB', 'utf8').toString('hex'), function (data) { //using 32 byte key 

	console.log("got key and iv buffers")

	// let encText = encryptionHelper.encryptText(algorithm, data.key, data.iv, story, "base64")

	console.log("encrypted text = " + story)

	let decText = encryptionHelper.decryptText(algorithm, data.key, data.iv, story, "hex")

	console.log("decrypted text = " + decText)

	// assert.equal(decText, story)
})