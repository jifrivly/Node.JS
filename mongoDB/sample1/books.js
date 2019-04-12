const express = require("express")

const books = express.Router()

function booksRoute(nav) {
    var bookList = [{
            title: "Warand Pease",
            genre: "Drama",
            author: "Kamisaki"
        },
        {
            title: "Bookname2",
            genre: "Type1",
            author: "Author1"
        },
        {
            title: "3rdBookname",
            genre: "Type2",
            author: "Author2"
        },
        {
            title: "4thBookname",
            genre: "Type3",
            author: "Author3"
        }
    ]

    books.get("/", (req, res) => {
        // books.route("/").get((req, res) => {
        res.render("books", {
            title: "Books",
            nav,
            bookList
        })
    })

    // books.get("/:bookID", (req, res) => {
    books.route("/:bookID").get((req, res) => {
        const id = req.params.bookID
        res.render("books_details", {
            title: "Books/" + bookList[id].title,
            nav,
            book: bookList[id]
        })
    })


    return books
}

module.exports = booksRoute