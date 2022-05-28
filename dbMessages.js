import mongoose from "mongoose"

const messagingSchema = mongoose.Schema({
	r: String,
	name: String,
	timestamp: String,
	received: Boolean
})

export default mongoose.model('messagingMessages', messagingSchema)
