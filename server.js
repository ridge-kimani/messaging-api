import express from 'express'
import mongoose from 'mongoose'

import Messages from './dbMessages.js'

//App Config
const app = express()
app.use(express.json())

const port = process.env.PORT || 8001

const connection_url = 'mongodb+srv://ridge_kimani:test_password@cluster0.pqradjq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err) => {
	if (err) console.log(err)
	else console.log("success")
})

app.post('/messages/new', (req, res) => {
	const dbMessage = req.body
	Messages.create(dbMessage, (err, data) => {
		if (err) res.status(500).send(err)
		else res.status(201).send(data)
	})
})

app.get('/messages/sync', (req, res) => {
	Messages.find((err, data) => {
		if (err) res.status(500).send(err)
		else res.status(200).send(data)
	})
})



app.listen(port, () => console.log(`Listening on localhost: ${port}`))
