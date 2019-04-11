const express = require("express")
const chalk = require("chalk")
const path = require("path")

var authorRouter = require("./authors")
var booksRouter = require("./books")

var my_app = express()


my_app.set('views', "./src/views")
my_app.set("view engine", "ejs")
my_app.use(express.static(path.join(__dirname,"public")))

my_app.get("/", (req, res) => {
    res.render("index",{
        title:"Library",
        nav:[
            {link:"/books",title:"Books"},
            {link:"/authors",title:"Authors"}
        ]
    })
})


my_app.use("/books",booksRouter)

my_app.use("/authors",authorRouter)



my_app.listen(4545, () => {
    console.log(chalk.blue("Server Working... Listening to port 4545"))
})