const express = require("express")
const handlebars = require("express-handlebars")

var myapp = express()
// myapp.engine('handlebars',handlebars())
myapp.engine('handlebars',handlebars({defaultLayout:'mylayout'}))

myapp.set('view engine','handlebars')


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

myapp.listen(4545)