const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req,res)=>{
    res.json({data})
})