module.exports = (sequelize, Sequelize) => {
    const Departemants = sequelize.define('Departemants', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      Name: {
      type: Sequelize.STRING
      },      
        });    
    return Departemants;
  }