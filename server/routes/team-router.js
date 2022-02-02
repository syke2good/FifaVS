const express = require('express')

const TeamCtrl = require('../controllers/team-ctrl')
const 

const router = express.Router()

router.post('/team', TeamCtrl.createTeam)
router.put('/team/:id', TeamCtrl.updateTeam)
router.delete('/team/:id', TeamCtrl.deleteTeam)
router.get('/team/:id', TeamCtrl.getTeamById)
router.get('/teams', TeamCtrl.getTeams)

module.exports = router