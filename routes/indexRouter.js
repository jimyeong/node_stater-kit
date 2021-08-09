const router = require("express").Router();
const User = require("../models/user");
const Mentor = require("../models/mentor");

router.post("/register", (req, res, next)=>{
    const {email, password} = req.body;
    console.log("hello world");
    const user = User.create({
        email, password
    });
    req.user = user;
    next();
}, (req, res)=>{
    const setMentor = (user)=>{
        return Mentor.create({
            userId: user.id 
        });
    }
    const onSuccess = ()=>{
        res.status(200).json({
            message: "success"
        });
    };
    const onFail = (err)=>{
        res.status(400).json({
            message: err.message
        })
    }
    req.user
    .then(setMentor)
    .then(onSuccess)
    .catch(onFail);
})


module.exports = router;
