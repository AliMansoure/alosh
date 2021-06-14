module.exports = (sequelize, Sequelize) => {
    const Tetchers = sequelize.define('Tetchers', {
        id:{
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
      degree: {
          type:Sequelize.STRING
      },
      role: {
        type:Sequelize.STRING
    },
      DepartemantId:{
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    });    
    return Tetchers;
  }