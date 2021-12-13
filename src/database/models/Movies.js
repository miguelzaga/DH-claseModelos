module.exports = function (sequelize, dataTypes) {
    const Movie = sequelize.define('Movie',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            title: { type: dataTypes.STRING },
            rating: { type: dataTypes.INTEGER },
            awards: { type: dataTypes.INTEGER },
            release_date: { type: dataTypes.DATE },
            length: { type: dataTypes.INTEGER }
        },
        {
            tableName: "movies",
            timestamps: false
        })

    return Movie
}