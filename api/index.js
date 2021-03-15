require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());

const coursesRouter = require('./routes/courses');
app.use('/courses', coursesRouter);

const careersRouter = require('./routes/careers');
app.use('/career', careersRouter);

app.listen(8000, () => console.log('server started'));
