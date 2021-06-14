const db = require('../config/connection.js');
const Courses = db.courses;
exports.create = (req, res) => {  
    const courses2  = {  
      Name: req.body.Name,
      TetcherId:req.body.TetcherId,
      classeId:req.body.classeId,
    };
            Courses.create(courses2).then( courses => {    
                res.send(courses);
              });   
    };
    exports.findAll = (req ,res) => {
        Courses.findAll({ include: ["tetchers"] }).then(courses => {
            res.send(courses)
        });
    };
    exports.findById = (req, res) => {  
        Courses.findByPk(req.params.coursesId,{ include: ["tetchers"] }).then(courses => {
        res.send(courses);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.coursesId;
      Courses.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a corsesId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const id = req.params.coursesId;
      Courses.update( { Name: req.body.Name }, 
               { where: {id: req.params.coursesId} }
               ).then(() => {
               res.status(200).send("updated successfully a corses with id = " + id);
               });
    };