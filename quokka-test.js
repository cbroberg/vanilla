const fetch = require('node-fetch')

// Uses Promise.all() = parallel 
const fetchCatAvatars1 = async (userId) => {
	const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`)
	const user = await response.json()
	user 
	return await Promise.all(user.cats.map(async (catId) => {
		const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`)
		const catData = await response.json()
		return catData.imageUrl
	}))
}

// Uses Await and synchronous loop = synchronous 
const fetchCatAvatars2 = async (userId) => {
	const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`)
	const user = await response.json()  
	const catImageUrls = []
	for (const catId of user.cats) {
		const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`)
		const catData = await response.json()
		catImageUrls.push(catData.imageUrl)
	}
	return catImageUrls
}

const result1 = fetchCatAvatars1(123)
const result2 = fetchCatAvatars2(123)
// result1 
// result2 

result1.then((res) => {
	console.log('Promise.all')
	res.map(url => console.log(url) 
	) 	
} )

result2.then((res) => {
	console.log('Await')
	res.map(url => console.log(url) 
	) 	
} )

