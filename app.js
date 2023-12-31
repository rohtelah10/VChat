const port = 3000;
const express = require('express');
const app = express();
const path = require("path");

// app.use('/', express.static('/build'));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("try.ejs");
})

app.listen(port, (req, res) => {
    console.log(`listening to port ${port}`);
})