// Reference vars
var printButton = document.getElementById('printFile')
var printFrame = document.getElementById('printf')

// onClick handler
printButton.onclick = function (evt) {
	console.log('evt: ', evt)
	printBlob('printf', printButton.getAttribute('data-print-resource-uri'), printButton.getAttribute('data-print-resource-type'))
}

// Fetch the file from the server
function getFile(fileUri, fileType, callback) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', fileUri)
	xhr.responseType = 'blob'
	xhr.onload = function (e) {
		// Success
		if (200 === this.status) {
			// Store as a Blob
			var blob = new Blob([this.response], { type: fileType })
			// Hang a URL to it
			blob = URL.createObjectURL(blob)
			callback(blob)
		} else {
			console.log('Error Status: ', this.status)
		}
	}
	xhr.send()
}

function printBlob(printFrame, fileUri, fileType) {
	// Debugging
	console.log('inside of printBlob')
	console.log('file URI: ', fileUri)
	console.log('file TYPE: ', fileType)

	// Get the file
	getFile(fileUri, fileType, function (data) {
		loadAndPrint(printFrame, data, fileType)
	})
}

function loadAndPrint(printFrame, file, type) {
	// Debugging
	console.log('printFrame: ', printFrame)
	console.log('file: ', file)

	window.frames[printFrame].src = file
	window.frames[printFrame].print()

    /*
    // Setup the print window content
    var windowContent = '<!DOCTYPE html>'
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>'
    windowContent += '<body>'
    windowContent += '<embed src="' + file + '" type="' + type + '">'
    windowContent += '</body>'
    windowContent += '</html>'

    // Setup the print window
    var printWin = window.open('','','width=340,height=260')
    printWin.document.open()
    printWin.document.write(windowContent)
    printWin.document.close()
    printWin.focus()
    printWin.print()
    printWin.close()
    */
}
