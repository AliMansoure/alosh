const db = require('../config/connection.js');
const students1 = db.students;
const classes = db.classes;
exports.findAllStudent = (req ,res) => {
 students1.findAll({ include: [{
     model:classes,
 }] }).then( students => {
     res.send(students)
        })
        
    };
    exports.findAllStudentByClassesName = (req ,res) => {
        students1.findAll({ include: [{
            model:classes,
            where: { Name: req.body.Name, }
        }] }).then( students => {
            res.send(students)
               })
               
           };
    