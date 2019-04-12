const express = require("express")
const bodyParser = require("body-parser")
const addBookData = require("./src/model/bookdata")

const adminRouter = express.Router()

adminRouter.use(bodyParser.urlencoded())

function admin(nav) {

    adminRouter.get("/", (req, res) => {
        res.send("<a href='/admin/addbook'><button>ADD BOOK</button></a>")
    })

    adminRouter.get("/addbook", (req, res) => {
        res.render("add_book", {
            title: "Admin/Add Book",
            nav
        })
    })
    adminRouter.post("/addbook", (req, res) => {
        var item = {
            title: req.body.name,
            author: req.body.genre,
            genre: req.body.authorname
        }
        var book = new addBookData(item)
        book.save()

        res.send(item)
    })
    return adminRouter
}

module.exports = admin