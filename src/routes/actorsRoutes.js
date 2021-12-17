const express = require('express')
const router = express.Router();
// const actorsController = require('./../controllers/actorsController')
const actorsController = require('./../controllers/usersController')

router.get('/actors', actorsController.list)
// router.get('/actors/detail/:id', actorsController.detail)

module.exports = router