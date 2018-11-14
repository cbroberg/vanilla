const puppeteer = require('puppeteer')

const sc = async () => {
	
}


(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pdf')
	await page.pdf({
		path: 'images/api.pdf',
		format: 'A4'
	})
	await browser.close()
})()

