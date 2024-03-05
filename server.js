const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.port;

app.use('/api/contacts',require("./routes/ContactsRoutes.js"))

app.get('/', (req, res) => {
    res.send("hello");

  });

// app.get('/', (req, res) => {
//     res.json({
//         "routes": [
//             {
//                 "method": "GET",
//                 "path": "/",
//                 "description": "Get all contacts",
//                 "handler": "getAllContacts"
//             },
//             {
//                 "method": "GET",
//                 "path": "/:id",
//                 "description": "Get one contact",
//                 "handler": "getOneContact"
//             },
//             {
//                 "method": "POST",
//                 "path": "/",
//                 "description": "Create contact",
//                 "handler": "createContact"
//             },
//             {
//                 "method": "PUT",
//                 "path": "/:id",
//                 "description": "Update contact",
//                 "handler": "updateContact"
//             },
//             {
//                 "method": "DELETE",
//                 "path": "/:id",
//                 "description": "Delete contact",
//                 "handler": "deleteContact"
//             }
//         ]
//     });

//   });

app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})
