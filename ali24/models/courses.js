module.exports = (sequelize, Sequelize) => {
    const Courses = sequelize.define('Courses', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      Name: {
      type: Sequelize.STRING
      },
      TetcherId:{
        type: Sequelize.INTEGER,
        foreignKey: true,
    } ,
    classeId:{
      type: Sequelize.INTEGER,
      foreignKey: true,     
  }      
        });    
    return Courses;
  }