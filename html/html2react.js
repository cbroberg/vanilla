var ReactDOMServer = require('react-dom/server')
var HtmlToReactParser = require('html-to-react').Parser
// var htmlInput2 = '<div><h1>Title</h1><p>A paragraph</p></div>'
var htmlInput = '<p><strong>Senti</strong><span style="font-weight: 300;"> er en open source Internet of Things platform, der </span><strong>gør dig i stand til at sanse og opsamle</strong><span style="font-weight: 300;"> viden om mennesker og tilstande i dit bymæssige eller industrielle miljø.</span></p>< p > <br><span style="font-weight: 300;">Senti.Cloud er den </span><strong>infrastruktur</strong><span style="font-weight: 300;"> du har brug for til at opbygge, implementere og styre din portefølje af </span><strong>IoT-enheder</strong><span style="font-weight: 300;"> i stor skala.</span></p>'
var htmlToReactParser = new HtmlToReactParser()
var reactElement = htmlToReactParser.parse(htmlInput)
var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement)

console.log(reactHtml, htmlInput) // true
