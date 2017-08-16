var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

function sleepPromised(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function demo() {
  log('Taking a break...')
  await sleepPromised(2000)
  log('Two seconds later')
}

demo()

