const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        name: { type: String, required: true, unique: true },
        league: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('teams', Team)
