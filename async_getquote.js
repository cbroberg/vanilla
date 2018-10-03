var request = require('request')

var log = (p) =>  { console.log(p) }
var cls = () => { process.stdout.write('\x1Bc') }

var data = ''

function getQuote() {
    return new Promise(function(resolve, reject) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
            if (error) return reject(error)
            resolve(body)
        })
    })
}

async function main() {
    try {
        var quote = await getQuote()
		console.log(quote)
		return quote
    } 
    
    catch(me) {
        console.error(me)
    }
}

cls()
data = main()
log('Ron once said,')
log(data)

