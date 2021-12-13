const db = require('./../database/models')

const moviesController = {
    // list: function(req,res){
    //     console.log(db.Movie)
    //     res.render("moviesList", {movies: []})
    // }
    list: function(req, res){
        db.Movie
            .findAll()
            .then(function(movies){
                return res.render("moviesList", {movies: movies})
            })
    }
}

module.exports = moviesController