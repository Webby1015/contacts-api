const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.port;


app.use('/api/contacts',require("./routes/ContactsRoutes.js"))


app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})
