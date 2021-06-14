const db = require("../config/connection.js");
 const Roles = db.roles;
 exports.create = (req, res) => {  
    const roles2 = {  
      name: req.body.name
     };
    Roles.create(roles2).then( roles => {    
                 res.send(roles);
       });
   };   
    exports.findAll = (req ,res) => {
      Roles.findAll().then(roles => {
            res.send(roles)
        });
    };
    exports.findById = (req, res) => {  
      Roles.findByPk(req.params.rolesId).then( roles => {
        res.send(roles);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.rolesId;
      Roles.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a roleId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const id = req.params.rolesId;
      Roles.update( {name: req.body.name }, 
               { where: {id: req.params.rolesId} }
               ).then(() => {
               res.status(200).send("updated successfully a role with id = " + id);
               });    };