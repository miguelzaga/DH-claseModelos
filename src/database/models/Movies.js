modules.exports = function (sequelize, DataType){
    const Movie = sequelize.define('Movies',
    {
        id: DataType,
        title: DataType.STRING,
        rating: DataType
    },
    {
        timestamps : false
    })
}