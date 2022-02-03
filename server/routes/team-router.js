const express = require('express')

const TeamController = require('../controllers/team-controllers')
const MatchController = require('../controllers/match-controllers')
const userControllers = require('../controllers/user-controllers')

const router = express.Router()

router.post('/team', TeamController.createTeam)
router.put('/team/:id', TeamController.updateTeam)
router.delete('/team/:id', TeamController.deleteTeam)
router.get('/team/:id', TeamController.getTeamById)
router.get('/teams', TeamController.getTeams)

router.get('/matches', MatchController.getMatches)
router.post('/match', MatchController.createMatch)
router.post('/users', userControllers.createUser)
router.post('/users/login', userControllers.login)

module.exports = router