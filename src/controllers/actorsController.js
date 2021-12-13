const db = require('./../database/models')

const autorsController = {
    list: function(req, res){
        db.Actor
            .findAll()
            .then(actors => res.render("actorsList", {actors:actors}))
            .catch(err => res.send(err))
    },
    detail: function(req, res){
        db.Actor
            .findByPk(req.params.id)
            .then(actor => res.render('actorsDetail', {actor: actor}))
            .catch(err => res.send(err))
    }

}

module.exports = autorsController