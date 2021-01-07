require("dotenv").config();
const mongoose = require("mongoose");

const URI = `mongodb+srv://psmiley2:${process.env.DB_PASSWORD}@cluster0.smd1t.mongodb.net/<dbname>?retryWrites=true&w=majority`

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database has been connected");
}

module.exports = connectDB;