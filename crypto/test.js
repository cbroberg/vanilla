let encryptionHelper = require("./encryptionhelper")
var assert = require('assert')

let story = "F34FBB464A4D3456F747"
let algorithm = encryptionHelper.CIPHERS.AES_128_CTR

console.log("testing encryption and decryption")
console.log("text is: " + story)

encryptionHelper.getKeyAndIV("FBFBFBFBFBFBFBFB", function (data) { //using 32 byte key 

	console.log("got key and iv buffers")

	// let encText = encryptionHelper.encryptText(algorithm, data.key, data.iv, story, "base64")

	console.log("encrypted text = " + story)

	let decText = encryptionHelper.decryptText(algorithm, data.key, data.iv, story, "hex")

	console.log("decrypted text = " + decText)

	// assert.equal(decText, story)
})