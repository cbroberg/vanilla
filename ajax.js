// AJAX = Asynchronous JavaScript And XML

function loadDoc() {
    var xhttp = new XMLHttpRequest()
    // console.log(xhttp)
    document.getElementById("demo").innerHTML = "Hello from ajax.js"

    xhttp.onreadystatechange = function() {        
        if (this.readystate === 4 && this.status === 200) {
            console.log(this.readystate)
            document.getElementById("demo").innerHTML = this.responseText
            console.log(this.responseText)
        }        
    }

    xhttp.open("GET", "https://crossorigin.me/http://crm.webhouse.dk/download/json/storage.json", true)
    xhttp.send()

}
