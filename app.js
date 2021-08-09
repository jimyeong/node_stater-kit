const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./models");


const {sequelize} = db;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));


sequelize.sync({force: false, alter: true}).then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log("err: ",err);
});

app.get("/", (req, res)=>{
    res.send("ok");
});

app.use("/v1", require("./routes/indexRouter"));

app.listen(5000, ()=>{
    console.log("port is running on ", "5000 port");
});