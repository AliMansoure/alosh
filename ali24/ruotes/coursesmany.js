const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const coursesmany = require('../controller/coursesmany'); 
    // Create a new student 
    app.get('/api/findAllCourses',[authJwt.verifyToken], coursesmany.findAllCourses);
    app.get('/api/findAllCoursesByClassName',[authJwt.verifyToken], coursesmany.findAllCoursesByClassName);

}