const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/jifrilibrary")

const schema = mongoose.Schema

var newBookSchema = new schema({
    title: String,
    author: String,
    genre: String
})

var bookData = mongoose.model('book_data', newBookSchema)

module.exports = bookData