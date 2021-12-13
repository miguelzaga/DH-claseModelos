module.exports = function (sequelize, dataTypes) {
    const Actor = sequelize.define("Actor",
        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            first_name: { type: dataTypes.STRING },
            last_name: { type: dataTypes.STRING },
            rating: { type: dataTypes.DECIMAL }
        },
        {
            tableName: "actors",
            timestamps: false
        }
    )

    return Actor
}