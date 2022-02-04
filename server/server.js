const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const router = require('./routes/team-router')

const app = express()
const apiPort = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
