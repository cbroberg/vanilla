var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

function reqListener () {
  console.log(this.responseText)
}

const url = "http://crm.webhouse.dk/download/json/storage.json"

var xhttp = new XMLHttpRequest()

xhttp.addEventListener("load", reqListener)
xhttp.open("GET", url)
xhttp.send()

