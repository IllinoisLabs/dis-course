const mongoose = require('mongoose');
const Course = require('../models/course');

const careerSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	courses: {
		type: [String],
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Career', careerSchema);
