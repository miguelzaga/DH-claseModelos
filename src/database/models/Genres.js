module.exports = function (sequelize, DataType){
    const Genre = sequelize.define('Genre',
    {
        id: DataType,
        name: DataType.STRING,
        ranking: DataType.INT,
        active: DataType.INT
    },
    {
        timestamps : false
    })

    return Genre
}