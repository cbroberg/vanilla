const puppeteer = require('puppeteer')

const sc = async () => {
	
}


(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.setViewport({
		width: 1280,
		height: 800
	})
	await page.goto('https://console.senti.cloud/')
	await page.screenshot({
		path: 'puppeteer.png',
		fullPage: true
	})
	await page.pdf({ path: 'puppeteer.pdf', printBackground: true })
	await browser.close()
})()

