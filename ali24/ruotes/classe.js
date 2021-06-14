const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const classe = require('../controller/classe.js'); 
    // Create a new class 
     app.post('/api/classe',[authJwt.verifyToken], classe.create);
    //select all class
    app.get('/api/classe',[authJwt.verifyToken], classe.findAll);
    //select class byid
     app.get('/api/classe/:classeId',[authJwt.verifyToken], classe.findById);

  // Delete a class with Id
  app.delete('/api/classe/:classeId',[authJwt.verifyToken], classe.delete);
   // Update a class with Id
    app.put('/api/classe/:classeId',[authJwt.verifyToken], classe.update);
 
}