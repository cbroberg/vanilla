var geoip = require('geoip-lite')

var ip = "85.83.68.241"
var geo = geoip.lookup(ip)

console.log(geo)

console.log("The IP is %s", geoip.pretty(ip))