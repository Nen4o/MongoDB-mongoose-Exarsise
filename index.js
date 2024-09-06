const mongoose = require('mongoose');
const Students = require('./model/Students');

mongoose.connect('mongodb://localhost:27017/test1')
    .then(() => console.log('connected'));


// CRUD with mongoose

//Create
// Students.create({
//     name: 'Pesho',
//     age: 28
// }).then(student => {
//     console.log('New student created');
//     console.log(student);

// })

//Read
Students.find()
    .then(students => {
        console.log('Find All');
        console.log(students);
    });

Students.findOne({ name: 'Pesho' })
    .then(student => {
        console.log('Find One');
        console.log(student);
    })

Students.findById('66d9e7a9d2510fd5d52710bc')
    .then(student => {
        console.log('Find by ID'),
            console.log(student);
    })

//Update
Students.updateOne({ name: 'Pesho' }, { $set: { age: 19 } })
    .then(student => {
        console.log('Update One');
        console.log(student);
    })

Students.findByIdAndUpdate('66d9e7a9d2510fd5d52710bc', { $set: { name: 'Ivancho' } })
    .then(student => {
        console.log('Update By Id');
        console.log(student);
    })

//Delete 

Students.deleteOne({ name: 'Pesho' })
    .then(student => {
        console.log('Delete One');
        console.log(student);
    })

Students.findByIdAndDelete('66d9e7a9d2510fd5d52710bc')
    .then(student => {
        console.log('Delete By ID');
        console.log(student);
    })