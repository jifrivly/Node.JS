const express = require("express")

const booksRouter = express.Router()

booksRouter.get("/",(req,res)=>{
    res.render("books",{
        title:"Books",
        nav:[
            {link:"/books",title:"Books"},
            {link:"/authors",title:"Authors"}
        ]
    })
})

booksRouter.route("/single").get((req,res)=>{
    res.send("Hello Single Books")
})

module.exports = booksRouter