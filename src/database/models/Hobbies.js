module.exports = (sequelize, DataType) => {
    const alias = 'Hobbie'
    
    const colums = {
        id:{
            primaryKey: true,
            type: DataType.INTEGER,
        },
        nombre:{
            type: DataType.STRING
        }
    }

    const config = {
        timestamps: false,
        tableName: 'hobbie'
    }
    
    const hobbie = sequelize.define(alias, colums, config)

    return hobbie

}
