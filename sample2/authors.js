const express = require("express")

const authors = express.Router()

function authorsRouter(nav) {
    authors.get("/", (req, res) => {
        res.render("authors", {
            title: "Authors",
            nav
        })
    })
    return authors
}
module.exports = authorsRouter
// module.exports = authors