const express = require("express")
const handlebars = require("express-handlebars")

var myapp = express()
// myapp.engine('handlebars',handlebars())
myapp.engine('handlebars',handlebars({defaultLayout:'mylayout'}))

myapp.set('view engine','handlebars')

myapp.use(express.static('views/static'))

myapp.get('/',(req,res)=>{
    res.render("index")
})

myapp.get('/contact',(req,res)=>{
    res.render("contact")
})

myapp.get('/about',(req,res)=>{
    res.render("about")
})

myapp.get('/gallery',(req,res)=>{
    res.render("gallery")
})


myapp.use(express.urlencoded())

myapp.post('/getdata',(req,res)=>{
    var name = req.body.name
    var address = req.body.address
    var place = req.body.place
    var phone = req.body.phone
    var email = req.body.email
    var message = req.body.message

    res.render("about",{name:name,address:address,place:place,phone:phone,email:email,message:message})
})

// myapp.get("/login",(req,res)=>{
//     var user = req.body.username
//     var pass = req.body.password
//     console.log(user)
//     console.log(pass)
//     res.send("Hii")

//     // if (user == "admin" && pass == "1234") {
//     //     res.send(req.body.username + req.body.password + "Success")
//     // } else {
//     //     res.send(req.body.username + req.body.password + "Failed")
//     // }
// })

myapp.listen(6767,()=>{
    console.log("Web App running successfully")
})