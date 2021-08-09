const router = require("express").Router();


router.post("/register", (req, res, next)=>{
    console.log("hello world");
    next();
}, (req, res)=>{
    res.status(200).json({
        message: "hi"
    })
})


module.exports = router;
