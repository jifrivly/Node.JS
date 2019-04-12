const express = require("express")
const chalk = require("chalk")
const path = require("path")
const ejsLayout = require("express-ejs-layouts")

var nav = [{
        link: "/books",
        title: "Books"
    },
    {
        link: "/authors",
        title: "Authors"
    }
]

var booksRouter = require("./books")(nav)
var authorRouter = require("./authors")(nav)
var adminRouter = require("./admin")(nav)


var my_app = express()

my_app.set('views', "./src/views")
my_app.set("view engine", "ejs")

my_app.use(express.static(path.join(__dirname, "public")))
my_app.use(ejsLayout)
my_app.use("/books", booksRouter)
my_app.use("/authors", authorRouter)
my_app.use("/admin", adminRouter)

my_app.get("/", (req, res) => {
    res.render("index", {
        title: "Library",
        nav
    })
})


my_app.listen(4545, () => {
    console.log(chalk.blue("Server Working... Listening to port 4545"))
})