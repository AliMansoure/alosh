const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const departemant = require('../controller/departemant'); 
    // Create a new departemant 
    app.post('/api/departements',[authJwt.verifyToken], departemant.create);
    //select all departemant
    app.get('/api/departements',[authJwt.verifyToken], departemant.findAll);
    //select departemant byid
     app.get('/api/departements/:DepartemantId',[authJwt.verifyToken], departemant.findById);

  // Delete a departemant with Id
  app.delete('/api/departements/:DepartemantId',[authJwt.verifyToken], departemant.delete);
   // Update a departemant with Id
    app.put('/api/departements/:DepartemantId',[authJwt.verifyToken], departemant.update);
 
}
