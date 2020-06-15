const express = require('express')
const path = require('path')

let app = express()

app.use(express.static(path.join(__dirname,'public')))

app.use(function(req,res,next) {
    var err = new Error("Not Found")
    err.status = 404
    next(err)
})

//app.all('*',(req,res) => {
//    res.send('<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="alice">Thanks for the Twilio Demo Application</Say></Response>')
//})

app.listen(8080, 
    () => { 
        console.log("TwiDemo started at port 8080")
    }
)