const db=require('../config/connection.js');
const coursesclasses = require('../models/coursesclasses.js');
const Coursesclasses = db.coursesclasses;
exports.create = (req, res) =>{  
    const coursesclasses2  = {  
        classeId: req.body.classeId,
        coursesId: req.body.coursesId,
     };
     Coursesclasses.create(coursesclasses2).then(coursesclasses =>{    
                res.send(coursesclasses);
              });   
    };
    exports.findAll = (req ,res) => {
        Coursesclasses.findAll().then(coursesclasses => {
            res.send(coursesclasses)
        });
    };
    exports.delete = (req, res) => {
        const Id = req.params.coursesId;
        const ed = req.params.classeId;
        Coursesclasses.destroy({
          where: { coursesId : Id,
            classeId:ed }
        }).then(() => {
          res.status(200).send('deleted successfully a coursesId with id = ' + Id +'classesId' + 'classesId ='+ ed);
        });
      };