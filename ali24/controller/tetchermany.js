// const db = require('../config/connection.js');
// const Tetchers = db.tetchers;
// const roles = db.roles;
// exports.findAllTetcherByRole = (req ,res) => {
//     Tetchers.findAll({ include: [{
//      model:roles,
//  }] }).then( tetchers => {
//      res.send(tetchers)
//         })
        
//     };
//     exports.findAllTetcherByRoleName = (req ,res) => {
//         Tetchers.findAll({ include: [{
//          model:roles,
//          where: { name: req.body.name, }
//      }] }).then( tetchers => {
//          res.send(tetchers)
//             })
            
//         };