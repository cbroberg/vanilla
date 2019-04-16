const replace = require('replace-in-file')

const options = {
	files: './senti-template.service',
	from: /servicename/g,
	to: 'template',
}

const replaceInFile = async () => {
	try {
	  const changes = await replace(options)
	  console.log('Modified files:', changes.join(', '))
	}
	catch (error) {
	  console.error('Error occurred:', error)
	}
}

replaceInFile()