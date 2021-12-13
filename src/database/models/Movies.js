module.exports = function (sequelize, DataType){
    const Movie = sequelize.define('Movie',
    {
        id: DataType,
        title: DataType.STRING,
        rating: DataType.INT,
        awards: DataType.INT
    },
    {
        timestamps : false
    })

    return Movie
}