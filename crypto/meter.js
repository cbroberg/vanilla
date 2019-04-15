const ivstring = 'FBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFB'
const dataPacket = new Buffer('F34FBB464A4D3456F747', 'hex')

const key = new Buffer('74748073D776ECF7B6BD4AC99C18CD70', 'hex')
const crc = require('crc/crc16xmodem').default
let crypto
try {
	crypto = require('crypto')
} catch (err) {
	console.log('crypto support is disabled!')
}

const decryptMeter = () => {
	let iv = new Buffer.from(ivstring, 'hex')
	// let iv = ivstring.toString
	let decipher = crypto.createDecipheriv('aes-128-ctr', key, iv)
	let decrypted = decipher.update(dataPacket)
	// C1FB0000000000007F16906A

	let bits = decrypted.slice(0, 8) //we need only bits 3-10
	let vBits = decrypted.slice(8, 10) //last 2 bits
	console.log(vBits)
	console.log(bits.toString('hex'))
	console.log(bits, crc(bits).toString(16))

	// let last2 = new Int8Array(toArrayBuffer(decrypted))
	// console.log(last2)
	// console.log(last2[8].toString(16))
	return { decrypted, crc: crc(bits).toString(16), vBits }
}
console.log(decryptMeter())
module.exports = { decryptMeter }