const cls = require('./services/lib').cls
const log = require('./services/lib').log

var request = require('request')

cls()

const url = 'http://crm.webhouse.dk/download/json/storage.json'

var options = {
    url: url,
    headers: {
        'User-Agent': 'GET'
  }
}

const loadDoc = () => {
    return new Promise(function(resolve, reject) {
        request(options, (error, response, body) => {
            if (error) return reject(new Error('Rejected'))
            resolve(body)
        })
    })
}

const main = (async () => {
    try {
        var doc = await loadDoc()
        // log(doc)
        return doc
    }  
    catch(me) {
        log(`Aaaarggghh you caught me ${me}`)
    }
})()

cls()

let loadedDoc = []
log(typeof(loadedDoc))

// Log the loaded document
main.then( (result) => {
    // log(result)
    loadedDoc = result
})

log('Loading document ...')

module.exports = {
    main: main,
}
