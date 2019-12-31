const mongoose = require("mongoose");

const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: String,
    stakes: Number,
    starts: Number,
    firsts: Number,
    seconds: Number,
    thirds: Number,
    dateUpdated: String
})

module.exports = mongoose.model("Dog", dogSchema)