const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const studentmany = require('../controller/studentmany'); 
    // Create a new student 
    app.get('/api/findAllStudent',[authJwt.verifyToken], studentmany.findAllStudent);
    app.get('/api/findAllStudentByClassesName',[authJwt.verifyToken], studentmany.findAllStudentByClassesName);

}