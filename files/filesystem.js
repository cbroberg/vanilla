var fs = require('fs')

fs.writeFile('./helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err)
    console.log('Hello World > helloworld.txt')
})

// var fs = require('fs')
// fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(data)
// })

fs.appendFile('./helloworld.txt', '\nThis is my text.', function (err) {
  if (err) throw err
  console.log('Updated!')
})
