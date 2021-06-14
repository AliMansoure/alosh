module.exports = (sequelize, Sequelize) => {
    const Classes = sequelize.define ('Classes' , {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      Name: {
      type: Sequelize.STRING,
      },      
        });    
    return Classes;
  }