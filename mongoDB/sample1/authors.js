const express = require("express")

const authorRouter = express.Router()

authorRouter.get("/", (req, res) => {
    res.render("authors", {
        title: "Authors",
        nav: [
            { link: "/books", title: "Books" },
            { link: "/authors", title: "Authors" }
        ]
    })
})

module.exports = authorRouter