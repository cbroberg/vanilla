var redis = require("redis"),
	client = redis.createClient()

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ })

client.on("error", function (err) {
	console.log("Error " + err)
})

client.set("string key", "string val", redis.print)
client.hset("hash key", "hashtest 1", "some value", redis.print)
client.hset(["hash key", "hashtest 2", "some other value"], redis.print)
// this key will expire after 10 seconds
client.set('key', 'value!', 'EX', 10)
client.get('key', redis.print)
client.set("mb", `{"level":30,"time":1554835961762,"pid":22402,"hostname":"cb - pro.local","req":{"id":1,"method":"GET","url":" / ","headers":{"host":"localhost: 3000","connection":"keep - alive","cache - control":"max - age=0","upgrade - insecure - requests":"1","user - agent":"Mozilla / 5.0(Macintosh; Intel Mac OS X 10_11_6) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 73.0.3683.86 Safari / 537.36","accept":"text / html, application / xhtml + xml, application / xml; q = 0.9, image / webp, image / apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9,da;q=0.8","cookie":"io=59krcNTupgg2i0HsAAAK","if-none-match":"W/\"b-Kq5sNclPz7QV2+lfQIuc6R7oRu0\""},"remoteAddress":"::1","remotePort":63800},"msg":"something else","v":1}`)
client.hmset("key2", "test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) { })
client.hkeys("hash key", function (err, replies) {
	console.log(replies.length + " replies:")
	replies.forEach(function (reply, i) {
		console.log("    " + i + ": " + reply)
	})
	client.quit()
})