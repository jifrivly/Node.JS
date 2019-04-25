const express = require("express")
const _ = require("lodash")
const os = require("os")


informations = [
    "Cpus information : ",
    os.cpus(),
    "Free memory : ",
    os.freemem(),
    "Hostname of the system : ",
    os.hostname(),
    "Network interfaces : ",
    os.networkInterfaces(),
    "Platform : ",
    os.platform(),
    "Os Type : ",
    os.type()
]

myapp = express()

myapp.get('/',(req,res)=>{
    res.send("This is Homepage")
})

myapp.get('/informations',(req,res)=>{
    res.send(informations)
})

myapp.get('/contacts',(req,res)=>{
    res.send("This is Contact page..")
})

myapp.listen(4545)