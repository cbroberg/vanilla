let crypto
try {
	crypto = require('crypto')
} catch (err) {
	console.log('crypto support is disabled!')
}

const { ENCRYPTION_KEY } = '74748073D776ECF7B6BD4AC99C18CD70' // Must be 256 bytes (32 characters)
const IV_LENGTH = 16 // For AES, this is always 16
//  IV = Initialization Vector

const decrypt = (text, vector) => {
	let v = vector
	let textParts = text.split(':')
	let iv = new Buffer.from(v.shift(), 'hex')
	let encryptedText = new Buffer.from(textParts.join(':'), 'hex')
	let decipher = crypto.createDecipheriv('aes-256-ctr', new Buffer.from(ENCRYPTION_KEY), iv)
	let decrypted = decipher.update(encryptedText)

	decrypted = Buffer.concat([decrypted, decipher.final()])

	return decrypted.toString()
}

console.log(decrypt('F34FBB464A4D3456F747', 'FBFBFBFBFBFBFBFB'))