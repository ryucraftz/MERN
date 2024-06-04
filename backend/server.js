require('dotenv').config()
const express = require('express')


// Express app
const app = express()

app.get('/', (req, res) => { res.json({mssg: "Welcome to the app"})
})

app.listen(process.env.PORT, ()=>{
    console.log('listening on 4000 port', process.env.PORT)
})