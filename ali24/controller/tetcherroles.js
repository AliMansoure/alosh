// const db =require('../config/connection.js');
// const Tetcherroles = db.tetcherroles;
// exports.create = (req, res) =>{  
//     const tetcherroles2  = {  
//      tetchersId: req.body.tetchersId,
//         rolesId: req.body.rolesId,
//      };
//      Tetcherroles.create(tetcherroles2).then(tetcherroles =>{    
//                 res.send(tetcherroles);
//               });   
//     };
//     exports.findAll = (req ,res) => {
//         Tetcherroles.findAll().then(tetcherroles => {
//             res.send(tetcherroles)
//         });
//     };
//     exports.delete = (req, res) => {
//         const Id = req.params.TetcherId;
//         const ed = req.params.rolesId;
//         Tetcherroles.destroy({
//           where: { TetcherId : Id,
//             rolesId:ed }
//         }).then(() => {
//           res.status(200).send('deleted successfully a tetcherId with id = ' + Id + 'rolesId' + ed) ;
//         });
//       };
