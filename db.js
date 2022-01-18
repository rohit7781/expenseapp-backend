const mongoose = require('mongoose');
require("dotenv").config()


const connectToMongo = () => {
    mongoose.connect(process.env.mongoURI, () => {
        console.log("Database is Connected ")
    })
}

module.exports = connectToMongo;