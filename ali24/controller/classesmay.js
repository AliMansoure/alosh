const db = require('../config/connection.js');
const students1 = db.students;
const classes = db.classes;
const courses = db.courses;
exports.findAllClass = (req ,res) => {
    classes.findAll({ include: [{
     model:students1,
 },
 {
    model:courses,
}] }).then( classes => {
     res.send(classes)
        })
        
    };