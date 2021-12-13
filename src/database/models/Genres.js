module.exports = function (sequelize, dataTypes){
    const Genre = sequelize.define('Genre',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING},
        ranking: {
            type: dataTypes.INTEGER},
        active: {
            type: dataTypes.INTEGER}
    },
    {
        timestamps : false
    })

    return Genre
}