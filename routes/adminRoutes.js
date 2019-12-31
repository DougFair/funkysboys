const express = require("express");
const router = express.Router();
const Dog = require("../models/dogs")



router.get("/admin", async (req,res) => {
    const allDogs = await Dog.find({})
    res.render("adminHome", {allDogs})
})

router.get("/create", (req,res) => {
    res.render("adminCreate")
})

router.post("/create", (req,res) => {
    res.render("adminCreate")
})

router.post("/createDog", async (req,res, next) => {
    const { name, starts, stakes, firsts, seconds, thirds } = req.body
    const newDog = new Dog ({name, starts, stakes, firsts, seconds, thirds})
    try {
    await newDog.save()
    } catch (err){
        console.log("error")
        return next()
    }
    res.redirect("/admin")
})

router.post("/selectDog", async (req,res,next)=> {
    const name = req.body.name
    const selectedDog = await Dog.find({name})
    res.render("adminUpdate", {selectedDog})
})

router.put("/updateDog/:id", async (req,res,next)=> {
    const {name, starts, stakes, firsts, seconds, thirds, dateUpdated} = req.body
    const id = req.params.id
    
    let updatedDog
    updatedDog = await Dog.findById(id)

    updatedDog.name = name
    updatedDog.starts = starts
    updatedDog.stakes = stakes
    updatedDog.firsts = firsts
    updatedDog.seconds = seconds
    updatedDog.thirds = thirds
    updatedDog.dateUpdated = dateUpdated

    await updatedDog.save()
    res.redirect("/admin")
})

module.exports = router;
