const Course = require('../../models/course');
const { hashId } = require('../../utils/helper');

//connect to db
const mongoose = require('mongoose');
console.log('mongodb://127.0.0.1:27017/');
mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));





// generates array of num numbers from 0 to max-1
const rng = (num, max) => {
  var a = [];
  while (a.length < num) {
    var x = Math.floor(Math.random() * max);
    if (a.indexOf(x) === -1) a.push(x);
  }
  return a;
};


//csv parsing
var csv = require("csvtojson");
var num = process.argv[2];
const filePath = __dirname + '/2020-sp-courses.csv';


csv().fromFile(filePath).then((d) => {
  //select num random courses from dataset
  let indices = rng(num, d.length);
  console.log(d[0]);
  let courses = [];
  for (var i = 0; i < num; i++) {
    row = d[indices[i]];
    const course = new Course({
      id: hashId(row.Name + row.Subject + row.Number),
      name: row.Name,
      coi: row.Subject,
      cn: row.Number,
    });
    courses.push(course);
  }
  console.log(courses);
  Course.insertMany(courses, (error, docs) => { });
});


