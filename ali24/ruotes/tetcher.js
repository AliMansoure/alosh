const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const tetcher = require('../controller/tetcher'); 
    // Create a new tetcher 
    app.post('/api/tetcher',[authJwt.verifyToken], tetcher.create);
    //select all tetcher
    app.get('/api/tetcher',[authJwt.verifyToken], tetcher.findAll);
    app.get('/api/tetcherall',[authJwt.verifyToken], tetcher.findAllTetchersByDepartemant);
    //select tetcher byid
     app.get('/api/tetcher/:TetcherId',[authJwt.verifyToken], tetcher.findById);

  // Delete a tetcher with Id
  app.delete('/api/tetcher/:TetcherId',[authJwt.verifyToken], tetcher.delete);
   // Update a tetcher with Id
    app.put('/api/tetcher/:TetcherId',[authJwt.verifyToken], tetcher.update);
 
}
