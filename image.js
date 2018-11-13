
const sharp = require('sharp')

sharp('./images/img1.JPG')
	.rotate()
	.resize(200, 200)
	.toFile('./images/img1_ouput.jpg', function (err) {
		// output.jpg is a 200 pixels wide and 200 pixels high image
		// containing a scaled and cropped version of input.jpg
	})

