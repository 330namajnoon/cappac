const http = require("http");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const express = require("express");

const port = process.env.PORT || 4000;
const pdp = path.join(__dirname,"./public");
const app = express();
app.use(cors());
app.use(express.static(pdp));

const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
})

app.post("/test",multer().none(),(req,res)=> {
    console.log(req.body.name);
    res.send("hola");
})