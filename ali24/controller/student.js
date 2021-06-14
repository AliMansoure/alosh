const db = require('../config/connection.js');
const { Op } = require("sequelize");
const students = db.students;
const departemants = db.departemants;
exports.create = (req, res) => {  
    const students2  = {  
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email , 
        address: req.body.address ,
        age: req.body.age ,
        DepartemantId:req.body.DepartemantId,
    };
    students.findOne({
      where:
    { email:  req.body.email },      
    }).then(Finndstudent => {
      if (Finndstudent) {
        return  res.status(300).json({students:Finndstudent , message : `student  is Alredy esxit error`})
      }
      else{
        students.create(students2).then(students => {    
          res.send(students);
});
      }
    });
 };
    exports.findAllStudentByDepartemantName = (req ,res) => {
      students.findAll({ include: [{ model:departemants,
          as: 'departemants',
          where: { Name: req.body.Name, },
        }] }).then( students => {
            res.send(students)
        })
        
    };
    exports.findAllStudentByDepartemant = (req ,res) => {
      students.findAll({ include: ["departemants"] }).then( students => {
          res.send(students)
      })
      
  };
    exports.findById = (req, res) => {  
      students.findByPk(req.params.studentId,{ include: ["departemants"] }).then( students => {
        res.send(students);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.studentId;
      students.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a studentId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const Id = req.params.StudentId;
      students.update( { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email,
        address: req.body.address, age: req.body.age }, 
               { where: {id: req.params.studentId} }
               ).then(() => {
               res.status(200).send("updated successfully a student with id = " + Id);
               });
    };