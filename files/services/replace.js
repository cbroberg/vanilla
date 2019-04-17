const replace = require('replace-in-file')

const SERVICENAME = 'servicename'
const FRIENDLYNAME = 'friendlyname'
const PORT1 = '3011'
const PORT2 = '3012'

const options = {
	files: [
		'./senti-template.1.service',
		'./senti-template-dev.1.service',
		'./registerservice-production',
		'./registerservice-development',
		'./scripts/service-deploy.sh',
		'./scripts/service-restart.sh',
	],
	from: [/servicename/g, /friendlyname/g, /port1/g, /port2/g],
	to: [SERVICENAME, FRIENDLYNAME, PORT1, PORT2],
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



/* 
BEFORE: Merge service-deploy & service-restart to 1 file
SYNTAX 1: ./create-senti-service broadcaster 3011
SYNTAX 2: node replace.js broadcaster 3011
SYNTAX 3: ./remove-senti-service broadcaster

PROCEDURE
	Get args
	set up GitHub repo + server.js
	Create service path + change directory ownership to deploy if needed
	Create log path + change directory ownership to deploy if needed
	Create key for .travis.yml
	Register key with travis
	Delete original key
	FRIENDLYNAME = uppercase_first_letter(SERVICENAME)
	PORT1 = port_arg
	PORT2 = port_arg + 1
	Replace file content
	Rename files "mv senti-template.service senti-$servicename.service ..."
	Copy/edit .env file with minimum value set (from server secret place to server)
	
	Git commit (the whole works)
*/