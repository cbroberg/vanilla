var os = require('os');
var ip = '0.0.0.0';
var ips = os.networkInterfaces();
Object
	.keys(ips)
	.forEach(function (_interface) {
		ips[_interface]
			.forEach(function (_dev) {
				if (_dev.family === 'IPv4' && !_dev.internal) ip = _dev.address
			})
	});
console.log(ip)
