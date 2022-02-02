const Match = require('../models/match-model')
const Team = require('../models/team-model')

const createMatch = async (req, res) => {
    const body = req.body
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide match data',
        })
    }

    for (let teamName of [body.teamOneName, body.teamTwoName]) {
        await Team.findOne({name: teamName}, (err, team) => {
            if (err) {
                return res.status(400).json({success: false, error: err})
            }

            if (!team) {
                return res.status(400).json({
                    success: false,
                    error: `Team with name ${teamName} not found`,
                })
            }
        })
    }


    await Team.findOne({name: body.teamOneName}, (err, team) => {
        if (!team) {
            return res.status(400).json({
                success: false,
                error: `Team with name ${body.teamOneName} not found`,
            })
        }
    })

    const match = new Match(body)

    if (!match) {
        return res.status(400).json({success: false, error: "Error occurred."})
    }

    match.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: match._id,
                message: 'Match data registered!',
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({
                error,
                message: 'Match data registration failed!',
            })
        })
}

const getMatches = async (req, res) => {
    await Match.find({}, (err, matches) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!matches.length) {
            return res
                .status(404)
                .json({success: false, error: `Matches not found`})
        }

        return res.status(200).json({success: true, data: matches})
    })
}

module.exports = {
    createMatch,
    getMatches
}