var getAuthToken = require('registry-auth-token')
// var getRegistryUrl = require('registry-auth-token/registry-url')
// log(getRegistryUrl('@cbroberg'))

// var getToken = require('get-npm-token')

// var pkg = require('./package.json')

let log = (p) =>  { console.log(p) }

let savedToken = {
    token: '',
    type: ''
}

// var saveToken = (token) => {
//     savedToken = token
// }

// log(pkg)

savedToken = getAuthToken()

log(savedToken.token)

