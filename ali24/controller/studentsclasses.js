const db=require('../config/connection.js');
const Studentsclasses = db.studentsclasses;
exports.create = (req, res) =>{  
    const studentsclasses2  = {  
        studentId: req.body.studentId,
        classeId: req.body.classeId,
     };
     Studentsclasses.create(studentsclasses2).then( studentsclasses =>{    
                res.send(studentsclasses);
              });   
    };
    exports.findAll = (req ,res) => {
        Studentsclasses.findAll().then(studentsclasses => {
            res.send(studentsclasses)
        });
    };
    exports.delete = (req, res) => {
        const Id = req.params.studentId;
        const ed = req.params.classeId;
        Studentsclasses.destroy({
          where: { studentId : Id,
            classeId:ed }
        }).then(() => {
          res.status(200).send('deleted successfully a studentsId with id = ' + Id +'classesId =' +ed);
        });
      };
