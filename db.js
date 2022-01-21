const mongoose = require('mongoose');
require("dotenv").config()

// mongoURI = "mongodb://localhost:27017/expenseapp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
    mongoose.connect(process.env.mongoURI, () => {
        console.log("Database is Connected ")
    })
}

module.exports = connectToMongo;