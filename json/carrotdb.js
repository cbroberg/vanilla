const carrotDB = require('carrotdb')

const app = async () => {
    try {
        await carrotDB.connect()

        const createdRecord = await carrotDB.create({ name: 'Christian', surname: 'Broberg' })

		const oneRecord = await carrotDB.get('8E9VXRDPMA')
		console.log(oneRecord)
        return console.log(createdRecord)
    } catch (error) {
        return console.log(error)
    }
}

app()