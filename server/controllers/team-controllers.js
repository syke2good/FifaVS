const Team = require('../models/team-model')

createTeam = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a team',
        })
    }

    const team = new Team(body)

    if (!team) {
        return res.status(400).json({ success: false, error: err })
    }

    team
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: team._id,
                message: 'Team created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Team not created!',
            })
        })
}

updateTeam = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Team not found!',
            })
        }
        team.name = body.name
        team.time = body.time
        team.rating = body.rating
        team
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: team._id,
                    message: 'Team updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Team not updated!',
                })
            })
    })
}

deleteTeam = async (req, res) => {
    await Team.findOneAndDelete({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }

        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

getTeamById = async (req, res) => {
    await Team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }
        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

getTeams = async (req, res) => {
    await Team.find({}, (err, teams) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!teams.length) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }
        return res.status(200).json({ success: true, data: teams })
    }).catch(err => console.log(err))
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    getTeams,
    getTeamById,
}