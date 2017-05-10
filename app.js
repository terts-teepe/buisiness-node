const express = require('express')
const app = express()

app.use('/', express.static('public'))

const listener = app.listen(3000, () => {
	console.log('server had started at ', listener.address().port)
})