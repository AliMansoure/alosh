const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const courses = require('../controller/courses.js'); 
    // Create a new courses 
     app.post('/api/courses',[authJwt.verifyToken], courses.create);
    //select all courses
    app.get('/api/courses',[authJwt.verifyToken], courses.findAll);
    //select courses byid
     app.get('/api/courses/:coursesId',[authJwt.verifyToken], courses.findById);

  // Delete a courses with Id
  app.delete('/api/courses/:coursesId',[authJwt.verifyToken], courses.delete);
   // Update a courses with Id
    app.put('/api/courses/:coursesId',[authJwt.verifyToken], courses.update);
 
}