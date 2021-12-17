module.exports = (sequelize, dataTypes) => {
  
    const modelName = "LoginUser";
  
    const column = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      passwor: {
        type: dataTypes.STRING,
        allowNull: false,
      }
    };
  
    const options = {
      tableName: 'LoginUsers',
      timestamps: false
    }
  
    const LoginUser = sequelize.define(modelName, column, options)
    return LoginUser;
  };
  