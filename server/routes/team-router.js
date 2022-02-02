const express = require('express')

const TeamController = require('../controllers/team-controllers')
const MatchController = require('../controllers/match-controllers')

const router = express.Router()

router.post('/team', TeamCtrl.createTeam)
router.put('/team/:id', TeamCtrl.updateTeam)
router.delete('/team/:id', TeamCtrl.deleteTeam)
router.get('/team/:id', TeamCtrl.getTeamById)
router.get('/teams', TeamCtrl.getTeams)
router.get('/matches', MatchController.getMatches)
router.get('/match', MatchController.createMatch)


module.exports = router