const express = require("express")
const addBookData = require("./src/model/bookdata")

const books = express.Router()

function booksRoute(nav) {
    var bookList = []

    books.get("/", (req, res) => {
        // books.route("/").get((req, res) => {
        addBookData.find()
            .then((books) => {
                res.render("books", {
                    title: "Books",
                    nav,
                    books
                })


            })
    })

    // books.get("/:bookID", (req, res) => {
    books.route("/:bookID").get((req, res) => {
        const id = req.params.bookID
        addBookData.findOne({
            _id: id
        }).then((book) => {
            res.render("books_details", {
                title: "Books/" + book.title,
                nav,
                book
            })
        })

    })


    return books
}

module.exports = booksRoute