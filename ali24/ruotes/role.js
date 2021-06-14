const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const role = require('../controller/role.js'); 
    // Create a new role 
     app.post('/api/role', role.create);
    //select all role
    app.get('/api/role',[authJwt.verifyToken], role.findAll);
    //select role byid
     app.get('/api/role/:rolesId', [authJwt.verifyToken], role.findById);

  // Delete a role with Id
  app.delete('/api/role/:rolesId',[authJwt.verifyToken], role.delete);
   // Update a role with Id
    app.put('/api/role/:rolesId', [authJwt.verifyToken],role.update);
 
}
