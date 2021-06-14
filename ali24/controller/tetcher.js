const db = require('../config/connection.js');
const { Op } = require("sequelize");
const Tetchers = db.tetchers;
const departemants = db.departemants;
exports.create = (req, res) => {  
    const tetchers2  = {  
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email , 
        address: req.body.address ,
        degree: req.body.degree ,
        role: req.body.role ,
        DepartemantId:req.body.DepartemantId, 
    };
    Tetchers.findOne({
        where:
            { email:  req.body.email },
      }).then(Finndtetcher => {
        if (Finndtetcher) {
          return  res.status(300).json({tetchers:Finndtetcher , message : `tetcher  is Alredy esxit error`})
        }
        else{ Tetchers.create(tetchers2).then(tetchers => {    
          res.send(tetchers);
        }); }
      });                
    }; 
    exports.findAll = (req ,res) => {
        Tetchers.findAll({ include: ["departemants"] }).then(tetchers => {
            res.send(tetchers)
        })
    };
    exports.findAllTetchersByDepartemant = (req ,res) => {
      Tetchers.findAll({ include: [{ model:departemants,
        as: 'departemants',
        where: { Name: req.body.Name, },
      }] }).then(tetchers => {
          res.send(tetchers)
      })
  };
    exports.findById = (req, res) => {  
        Tetchers.findByPk(req.params.TetcherId,{ include: ["departemants"] }).then(tetchers => {
        res.send(tetchers);
      })
    };
    exports.delete = (req, res) => {
      const Id = req.params.TetcherId;
      Tetchers.destroy({
        where: { id : Id }
      }).then(() => {
        res.status(200).send('deleted successfully a tetcherId with id = ' + Id);
      });
    };
    exports.update = (req, res) => {
      const id = req.params.TetcherId;
      Tetchers.update( { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email,
        address: req.body.address, degree: req.body.degree }, 
               { where: {id: req.params.tetchersId} }
               ).then(() => {
               res.status(200).send("updated successfully a tetcher with id = " + id);
               });
    };