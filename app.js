const express = require ("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
const methodOverride = require("method-override");
const mainRoute = require("./routes/main.js")
const adminRoutes = require("./routes/adminRoutes.js");
app = express();


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))
app.use(mainRoute)
app.use(adminRoutes)



let PORT = process.env.PORT || 3000

mongoose.connect("mongodb+srv://doug:Clone13!@cluster0-mthbi.mongodb.net/dogs?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  })
.then (() =>{
app.listen(PORT, ()=>
    console.log("server has started")
    )
})
.catch ((err) => console.log("error" + err))