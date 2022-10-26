const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/courses.json');
const details = require('./data/details.json');

app.get('/', (req, res) => {
  res.send('its work');
});

app.get('/all-courses', (req, res) => {
  res.send(courses);
});

app.get('/details', (req, res) => {
  res.send(details);
});

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  const course_details = details.filter(d => d.course_id === id);
  res.send(course_details);
});

app.get('/all-details/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = details.find(d => d._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log('programming learning platform server', port);
});