const express = require("express")

const authorRouter = express.Router()

authorRouter.get("/",(req,res)=>{
    res.send("authers page working")
})

module.exports = authorRouter