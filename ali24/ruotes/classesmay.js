const { authJwt } = require("../middleware");
module.exports = function(app) {
 
    const classmay = require('../controller/classesmay'); 
    // Create a new student 
    app.get('/api/findAllClass',[authJwt.verifyToken], classmay.findAllClass);

}