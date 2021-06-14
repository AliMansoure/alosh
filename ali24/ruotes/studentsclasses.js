const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const studentsclasses = require('../controller/studentsclasses'); 
    // Create a new students_class 
     app.post('/api/studentsClass',[authJwt.verifyToken], studentsclasses.create);
    //select all students_class
    app.get('/api/studentsClass',[authJwt.verifyToken], studentsclasses.findAll);
    //delete studentsclasses by id
    app.delete('/api/studentsClass/:studentId/:classeId',[authJwt.verifyToken], studentsclasses.delete); 

 
}