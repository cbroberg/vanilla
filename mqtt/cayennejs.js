var Cayenne = require('cayennejs')

// Initiate MQTT API
const cayenneClient = new Cayenne.MQTT({
	username: "b13f6f00-8197-11e9-94e9-493d67fd755e",
	password: "b445ada417dddeecca7b3ac7d2c7b60faa8c2f68",
	clientId: "434554a0-8198-11e9-9636-f9904f7b864b-id"
})

cayenneClient.connect((err, mqttClient) => {
	// dashboard widget automatically detects datatype & unit
	cayenneClient.kelvinWrite(3, 65)

	// sending raw values without datatypes
	cayenneClient.rawWrite(4, 123)

	// subscribe to data channel for actions (actuators)
	cayenneClient.on("demo", function (data) {
		console.log(data)
	})

})