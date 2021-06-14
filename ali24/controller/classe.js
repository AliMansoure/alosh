const db = require('../config/connection.js');
const Classes = db.classes;
exports.create = (req, res) =>{  
    const classes2  = {  
      Name: req.body.Name,
     };
     Classes.create(classes2).then(classes =>{    
                res.send(classes);
              });   
    };
    exports.findAll = (req ,res) => {
        Classes.findAll().then(classes => {
            res.send(classes)
        });
    };
    exports.findById = (req, res) => {  
        Classes.findByPk(req.params.classeId).then(classes => {
        res.send(classes);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.classeId;
      Classes.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a classeId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const id = req.params.classeId;
      Classes.update( { Name: req.body.Name }, 
               { where: {id: req.params.classeId} }
               ).then(() => {
               res.status(200).send("updated successfully a classe with id = " + id);
               });
    };