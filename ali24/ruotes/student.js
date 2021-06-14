const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const student = require('../controller/student'); 
    // Create a new student 
    app.post('/api/student',[authJwt.verifyToken], student.create);
    //select all student
    app.get('/api/studentBYD',[authJwt.verifyToken], student.findAllStudentByDepartemantName);
    app.get('/api/student',[authJwt.verifyToken], student.findAllStudentByDepartemant);
    //select student byid
     app.get('/api/student/:studentId',[authJwt.verifyToken], student.findById);

  // Delete a student with Id
  app.delete('/api/student/:studentId',[authJwt.verifyToken], student.delete);
   // Update a student with Id
    app.put('/api/student/:studentId',[authJwt.verifyToken], student.update);
 
}
