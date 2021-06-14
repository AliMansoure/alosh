module.exports = (sequelize, Sequelize) => {
    const Studentsclasses = sequelize.define("Studentsclasses", {
        studentId :{
        type: Sequelize.INTEGER,
        allowNull: false,
         primaryKey: true

      },
      classeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
        });    
    return Studentsclasses;
  }