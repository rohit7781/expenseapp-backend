const connectToMongo = require('./db')
var cors = require('cors')
const express = require('express')
require("dotenv").config()
connectToMongo();

const app = express()
const port = 5000


app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))

app.get('/', (req, res) => {
    res.send('App is Working Fine')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})