const Sequelize  = require('sequelize');
const sequelize = new Sequelize('datanew', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  const db = {};
  db.Sequelize = Sequelize;
   db. sequelize = sequelize;
  db. students = require('../models/student')(sequelize, Sequelize); 
  db. tetchers = require('../models/tetcher')(sequelize, Sequelize);  
  db. roles = require('../models/roles')(sequelize, Sequelize); 
  db. departemants = require('../models/departemant')(sequelize, Sequelize); 
  db .courses = require('../models/courses')(sequelize, Sequelize); 
  db. classes = require('../models/classes')(sequelize, Sequelize);
  db. studentsclasses = require('../models/studentsClasses')(sequelize, Sequelize);
  db.coursesclasses = require('../models/coursesclasses')(sequelize, Sequelize);
  //db.tetcherroles = require('../models/tetcherroles')(sequelize, Sequelize);
  db.user = require("../models/user")(sequelize, Sequelize);
  //1 relatioship between tetchers and departemants
  db.departemants.hasMany(db.tetchers, { as: "tetchers" });
db.tetchers.belongsTo(db.departemants, {
  foreignKey: "DepartemantId",
  as: "departemants",
});
// 2 relationship between students and departemants
db.departemants.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.departemants, {
  foreignKey: "DepartemantId",
  as: "departemants",
});
//3 relationship between tetchers and courses
db.tetchers.hasMany(db.courses, { as: "courses" });
db.courses.belongsTo(db.tetchers, {
  foreignKey: "TetcherId",
  as: "tetchers",
});
 // 4 relationship between student and classes
db.students.belongsToMany(db.classes, {
  through: "studentsclasses",
  foreignKey: "studentId",
  otherKey: "classeId"
});
db.classes.belongsToMany(db.students, {
  through: "studentsclasses",
  foreignKey: "classeId",
  otherKey: "studentId"
});
// 5 reationship between tetcher and role
// db.tetchers.belongsToMany(db.roles, {
//   through: "tetcherroles",
//   foreignKey: "TetcherId",
//   otherKey: "rolesId"
// });
// db.roles.belongsToMany(db.tetchers, {
//   through: "tetcherroles",
//   foreignKey: "rolesId",
//   otherKey: "TetcherId"
// });
//6 reationship between classes and courses
db.classes.belongsToMany(db.courses, {
  through: "coursesclasses",
  foreignKey: "classeId",
  otherKey: "coursesId"
});
db.courses.belongsToMany(db.classes, {
  through: "coursesclasses",
  foreignKey: "coursesId",
  otherKey: "classeId"
});  
db.roles.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "rolesId",
  otherKey: "usersId"
});
db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "usersId",
  otherKey: "rolesId"
});

db.ROLES = ["user", "admin", "moderator"];
  module.exports = db;
  
