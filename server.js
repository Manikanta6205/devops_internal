const express = require('express');
const app = express();

let students = [
    { id: 1, name: 'Manikanta', marks: 100 },
    { id: 2, name: 'sam', marks: 99 },
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});