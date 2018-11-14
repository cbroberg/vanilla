// require('dotenv').load()
const create = require('apisauce').create


// https://portal.opendata.dk/api/3/action/datastore_search?resource_id=7e85ea85-3bde-4dbf-944b-0360c6c47e3b

const apiRoute = '/api/3/action/datastore_search'
const numRetry = 2

const api = create({
	baseURL: 'https://portal.opendata.dk',
	timeout: 30000
})

var queryData = {
	resource_id: '7e85ea85-3bde-4dbf-944b-0360c6c47e3b', // the resource id
	// limit: 5, // get 5 results
	// q: 'carbonmonoxid' // query for 'jones'
}

const apiCall = async (n) => {
	let response
	try {
		response = await api.get(apiRoute, queryData)
	} catch (error) {
		if (n === 1) {
			console.error(error)
		}
		response = await apiCall(n - 1)
	}
	// check response	
	if (response.ok && response.status == 200) {
		console.log(response.status)
		return response.data
	} else {
		console.log('API Error:', response.problem, Date())
		return 403
	}
}

const result = async () => {
	let response
	response = await apiCall(numRetry)
	console.log(response)
	return
}

result()
