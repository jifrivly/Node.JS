const express = require("express")
const bodyParser = require("body-parser")

my_app = express()

my_app.use(bodyParser.urlencoded())

my_app.get("/",(req,res)=>{
    res.send("Hiii home")
})

my_app.post('/login', (req, res) => {
    var user = req.body.username
    var pass = req.body.password

    if (user == "admin" && pass == 1234) {
        console.log("Success..")
        res.send(JSON.stringify({status:"Success"}))
    } else {
        console.log("Failed..")
        res.send(JSON.stringify({status:"Failed"}))
    }
    console.log("Working")
})

my_app.post("/register",(req,res)=>{
    var name = req.body.name
    var admission_no = req.body.admission_no
    var username = req.body.username
    var password = req.body.password

    console.log(name)
    console.log(admission_no)
    console.log(username)
    console.log(password)
})

// my_app.listen(4545,()=>{
//     console.log("Web App running successfully")
// })
my_app.listen(process.env.PORT || 4545,()=>{
    console.log("Web App running successfully")
})