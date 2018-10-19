const fetch = require('node-fetch')

/* function fetchCatAvatars(userId) {
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
		.then(response => response.json())
		.then(user => {
			const promises = user.cats.map(catId =>
				fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
					.then(response => response.json())
					.then(catData => catData.imageUrl))
			return Promise.all(promises)
		})
}
 */

async function fetchCatAvatars(userId) {
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

const result = fetchCatAvatars(123)

result.then((res) => {
	// console.log(res)
	res.map(url => console.log(url) 
	) 	
} )


// result 
