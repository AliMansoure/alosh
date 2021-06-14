module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("Students", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      firstName: {
      type: Sequelize.STRING
      },
      lastName: {
      type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      age: {
          type:Sequelize.INTEGER
      },
      DepartemantId:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        
    },

    });    
    return Students;
  }