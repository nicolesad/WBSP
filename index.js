const express = require("express");
const pug = require("pug");
const app = express();

app.set("view engine",'pug');
app.set('view',__dirname + "/views");

const urlencodedParser = express.urlencoded({
    extended: false
});


app.listen(3000);