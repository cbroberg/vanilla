const { spawn } = require('child_process')

const child = spawn('pwd')

var cls = require('../services/lib').cls
var log = require('../services/lib').log

cls()

child.on('exit', function (code, signal) {
    log('child process exited with ' +
                `code ${code} and signal ${signal}`)
})

child.stdout.on('data', (data) => {
    log(`${data}`)
})

// child.stderr.on('data', (data) => {
//   console.error(`child stderr:\n${data}`)
// })

// Use spawn with large data
// const child3 = spawn('wc')

// process.stdin.pipe(child3.stdin)

// child3.stdout.on('data', (data) => {
//     log(`child stdout:\n${data}`)
// })

// const find = spawn('find', ['.', '-type', 'f'])
// const wc = spawn('wc', ['-l'])

// find.stdout.pipe(wc.stdin)

// wc.stdout.on('data', (data) => {
//   log(`Number of files ${data}`)
// })

// Use exec with small data
const { exec } = require('child_process')

exec('find *.js -type f | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`)
    return
    }
    log(`Number of files ${stdout}`)
})

// Best of both worlds
const child2 = spawn('find . -type f | wc -l', {
    stdio: 'inherit',
    shell: true,
    cwd: '/Users/cbroberg/Downloads'
})

child2.on('data', (data) => {
    log(`Number of files in downloads ${data}`)
})

const githubToken = 'XXXXX'

const spawnCmd = `curl -u 'cbroberg':${githubTojen} https://api.github.com/user/repos -d "{"name":"cb_demo"}"`

const child3 = spawn(spawnCmd, {
    stdio: 'inherit',
    shell: true
})

child3.on('data', (data) => {
    log(`Returned from curl: ${data}`)
})
