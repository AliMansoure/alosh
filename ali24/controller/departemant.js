const db = require('../config/connection.js');
const departemants = db.departemants;
exports.create = (req, res) => {  
    const departemants2  = {  
      Name: req.body.Name,
     };
     departemants.create(departemants2).then(departemants => {    
                res.send(departemants);
              });   
    };
    exports.findAll = (req ,res) => {
      departemants.findAll().then(departemants => {
            res.send(departemants)
        });
    };
    exports.findById = (req, res) => {  
      departemants.findByPk(req.params.DepartemantId).then(departemants => {
        res.send(departemants);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.DepartemantId;
      departemants.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a departmentId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const id = req.params.DepartemantId;
      departemants.update( { Name: req.body.Name }, 
               { where: {id: req.params.DepartemantId} }
               ).then(() => {
               res.status(200).send("updated successfully a department with id = " + id);
               });
    };