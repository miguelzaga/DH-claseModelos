module.exports = (sequelize, dataTypes) => {
  
    const modelName = "Materia";
  
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
      }
    };
  
    const options = {
      tableName: 'Materias',
      timestamps: false
    }
  
    const Materia = sequelize.define(modelName, column, options)
    return Materia;
  };
  