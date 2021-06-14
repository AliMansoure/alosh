const db = require('../config/connection.js');
const classes = db.classes;
const courses = db.courses;
exports.findAllCourses = (req ,res) => {
    courses.findAll({ include: [ {
    model:classes,
}] }).then( courses => {
     res.send(courses)
        })
        
    };
    exports.findAllCoursesByClassName = (req ,res) => {
        courses.findAll({ include: [ {
        model:classes,
        where: { Name: req.body.Name, }
    }] }).then( courses => {
         res.send(courses)
            })
            
        };