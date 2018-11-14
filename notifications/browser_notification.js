function notifyMe() {
	if (!("Notification" in window)) {
		alert('This browser does not support system notifications')
	}
	else if (Notification.permission === "granted") {
		notify()
	}
	else if (Notification.permission !== 'denied') {
		console.log('Blocked!')
		Notification.requestPermission(function(permission) {
			if (permission === "granted") {
				notify()
			}
		})
	}
}

function notify() {
	var notification = new Notification('Subscribe to ODEUM CodeJS Updates', {
		icon: 'https://github.com/odeum/odeum-codejs/raw/master/docs/assets/codejs_logo.png',
		body: "Hey! Please sign up now!",
	})
	
	notification.onclick = function() {
		window.open("https://github.com/odeum/odeum-codejs")
	}
	setTimeout(notification.close.bind(notification), 7000)
}

notifyMe()
