const moviesController = {
    list: function(req,res){
        res.render("moviesList", {movies: []})
    }
}

module.exports = moviesController