const { reset } = require('nodemon')
const db = require('./../database/models')
const genresController = {
    list: function(req, res){
        db.Genre
            .findAll()
            .then(function(genres){
                return res.render('genresList', {genres: genres})
            })
            .catch(err => res.send(err))
    },
    detail: function(req, res){
        db.Genre
            .findByPk(req.params.id)
            .then(genre => res.render('genresDetail', {genre: genre}))
    }
}

module.exports = genresController