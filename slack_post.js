var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

/* 
const slackURL = 'https://hooks.slack.com/services/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'
const message = '{"text": "Send from NodeJS to ODEUM Code Slack channel!"}'

var xhr = new XMLHttpRequest()

xhr.open("POST", slackURL, true)

//Send the proper header information along with the request
xhr.setRequestHeader('Content-type', 'application/json')

xhr.onreadystatechange = function () {//Call a function when the state changes.
	if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		xhr.send(message)
	}
}
 */

// xhr.send(message)
// xhr.send('string'); 
// xhr.send(new Blob()); 
// xhr.send(new Int8Array()); 
// xhr.send({ form: 'data' }); 
// xhr.send(document);



/*
curl -X POST -H 'Content-type: application/json' --data '{"text":"This is send from ODEUM Code!!!"}' https://hooks.slack.com/services/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

*/


function postMessageToSlack() {
	var xmlhttp = new XMLHttpRequest(),
		webhook_url = 'https://hooks.slack.com/services/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',
		myJSONStr = '{"text": "Send from NodeJS to ODEUM Code Slack channel!"}'

	xmlhttp.open('POST', webhook_url, false)
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xmlhttp.send(myJSONStr)
}

postMessageToSlack()
