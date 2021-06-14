module.exports = (sequelize, Sequelize) => {
    const coursesclasses = sequelize.define("coursesclasses", {
        classeId :{
        type: Sequelize.INTEGER,
        allowNull: false,
         primaryKey: true

      },
      coursesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
        });    
    return coursesclasses;
  }