var getPackageJsonFromGithub = require("get-package-json-from-github")

const getV = async () => {
	let packageJson = await getPackageJsonFromGithub('git+https://github.com/senti-platform/senti-watchman.git')
	return packageJson.version
}


const doAsyncWork = (arg) => {
	console.log(arg)	
}

const getVersion = async (repo, callback) => {
	// repo = org/repo
	let packageJson = await getPackageJsonFromGithub('git+https://github.com/' + repo + '.git')
	callback(packageJson.version)	
}

getVersion('senti-platform/senti-watchman', res => doAsyncWork(res))

// console.log(res)

getV().then((res) => {
	console.log(res)
})

