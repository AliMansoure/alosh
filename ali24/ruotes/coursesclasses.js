const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const coursesclasses = require('../controller/coursesclasses.js'); 
    // Create a new coursesclasses 
     app.post('/api/coursesclasses',[authJwt.verifyToken], coursesclasses.create);
    //select all coursesclasses
    app.get('/api/coursesclasses',[authJwt.verifyToken], coursesclasses.findAll);
//delete corsesclasses by id
app.delete('/api/coursesclasses/:coursesId/:classeId',[authJwt.verifyToken], coursesclasses.delete); 
 
}