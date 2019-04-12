const keys = require('./loadenv')

let crypto
try {
	crypto = require('crypto')
} catch (err) {
	console.log('crypto support is disabled!')
}

const { ENCRYPTION_KEY } = keys // Must be 256 bytes (32 characters)
const IV_LENGTH = 16 // For AES, this is always 16
//  IV = Initialization Vector

const encrypt = (text) => {
	let iv = crypto.randomBytes(IV_LENGTH)
	let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer.from(ENCRYPTION_KEY), iv)
	let encrypted = cipher.update(text)

	encrypted = Buffer.concat([encrypted, cipher.final()])

	return iv.toString('hex') + ':' + encrypted.toString('hex')
}

const decrypt = (text) => {
	let textParts = text.split(':')
	let iv = new Buffer.from(textParts.shift(), 'hex')
	let encryptedText = new Buffer.from(textParts.join(':'), 'hex')
	let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer.from(ENCRYPTION_KEY), iv)
	let decrypted = decipher.update(encryptedText)

	decrypted = Buffer.concat([decrypted, decipher.final()])

	return decrypted.toString()
}

module.exports = { decrypt, encrypt }