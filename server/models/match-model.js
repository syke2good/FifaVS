const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Match = new Schema(
    {
        teamOneName: {type: String, required: true},
        teamTwoName: {type: String, required: true},
        teamOneScore: {type: Number, required: true},
        teamTwoScore: {type: Number, required: true},
    },
    {timestamps: true},
)
module.exports = mongoose.model('matches', Match)
