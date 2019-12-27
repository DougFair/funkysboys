const express = require("express")
const router = express.Router()

const Dog = require("../models/dogs")

app = express()

// router.get("/admin", async (req,res) => {
//     const allDogs = await Dog.find({})
//     res.render("adminHome", {allDogs})
// })


router.get("/", async (req,res) => {
    const dogs = await Dog.find({})
    res.render("home", {dogs})
    }
)


module.exports = router