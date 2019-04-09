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
    res.send("Name : " + name +
             "<br>Address : " + address + 
             "<br>Place : " + place + 
             "<br>Phone : " + phone + 
             "<br>Email : " + email + 
             "<br>Message : " + message)
})

myapp.listen(4545)