const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('assignment server is running')
});

// All courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

// Single course
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id == id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Assignment running on port, ${port}`)
});