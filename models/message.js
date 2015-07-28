var mongoose = require('mongoose')
	,Schema = mongoose.Schema
	messageSchema = new Schema( {
		message: String,
		autor: String
	}),
Message = mongoose.model('message', messageSchema);

module.exports = Message;