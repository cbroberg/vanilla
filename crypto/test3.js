const crypto = require('crypto')


const encryptedText = Buffer.from('C1FBF34FBB464A4D3456F747', 'utf8').toString('hex')
const iv = Buffer.from('FBFBFBFBFBFBFBFBFBFBFBFBFBFBFBFB', 'utf8').toString('hex')
const key = Buffer.from('74748073D776ECF7B6BD4AC99C18CD70')

let decipher = crypto.createDecipheriv('aes-128-ctr', key, iv)
let decrypted = decipher.update(key, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted)

