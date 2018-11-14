const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`)
//     rl.close()
// })

let pause = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Press any key to continue ...', (answer) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`)
        rl.close()
})    
}

pause()
