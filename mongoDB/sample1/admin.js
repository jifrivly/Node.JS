const express = require("express")
const bodyParser = require("body-parser")

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
        var b_name = req.body.name
        var b_genre = req.body.genre
        var b_author = req.body.authorname

        res.send(b_name + b_genre + b_author)
    })
    return adminRouter
}

module.exports = admin