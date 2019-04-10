const express = require("express")

my_app = express()

my_app.get("/",(req,res)=>{
    res.send("Hiii home")
})
my_app.get("/login", (req, res) => {
    var user = req.body.username
    var pass = req.body.password

    if (user == "admin" && pass == "1234") {
        console.log("Success..")
    } else {
        console.log("Failed..")
    }
})

my_app.listen(4545)