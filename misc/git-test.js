// const workingDirPath = './services'
const git = require('simple-git') // (workingDirPath)
const path = '../git-test'

const gitUpdate = () => {
	// Pulls all updates from the default tracked repo
	git().cwd(path)
	git(path).pull((error) => {
		if (error) {
			console.log('ERROR!!!')		
		} else console.log('git pull success')
	})
	
}

gitUpdate()

