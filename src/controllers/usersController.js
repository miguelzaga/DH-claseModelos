const db = require('./../database/models')

const controller = {
    list: function(req, res){
        db.User
            .findAll()
            .then(users => 
                res.render("actorsList", {actors:users})
                
                )
            .catch(err => res.send(err))
    }
}

console.log(controller.list)

module.exports = controller