const express= require("express");

const port = 4242;

const app = express();
const data =[]

app.get("/", (req, res) => {
    res.send('je suis dans la route "/"');
});

