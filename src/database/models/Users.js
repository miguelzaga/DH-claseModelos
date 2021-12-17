module.exports = (sequelize, dataTypes) => {
  
    const modelName = "User";
  
    const column = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: dataTypes.STRING,
        allowNull: false,
      }
    };
  
    const options = {
      tableName: 'users',
      timestamps: false
    }
  
    const User = sequelize.define(modelName, column, options)
    
    // User.associate = function(modelos){
    //     User.belongsTo(modelos.LoginUsers, {
    //         as: "login",
    //         foreignkey: "passwor"
    //     })
    // }

    return User;
  };
  