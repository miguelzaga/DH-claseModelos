const db = require('./../database/models')

const moviesController = {
    list: function(req, res){
        db.Movie
            .findAll()
            .then(function(movies){
                return res.render("moviesList", {movies: movies})
            })
            .catch(function(err){
                return res.send(err)
            })
    },
    detail: function(req, res){
        db.Movie
        .findByPk(req.params.id)
        .then(function(movie){
                return res.render("moviesDetail", {movie: movie})
            })
        .catch(function(err){
            return res.send(err)
        })

        
    }
}

module.exports = moviesController