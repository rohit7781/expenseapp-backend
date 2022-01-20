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
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('App is Working Fine')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})