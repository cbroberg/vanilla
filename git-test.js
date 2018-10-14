const git = require('simple-git') // (workingDirPath)

const gitUpdate = () => {
	// Pulls all updates from the default tracked repo
	git().pull()
	console.log('git pull')
}

gitUpdate()