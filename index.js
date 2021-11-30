const express = require("express");
const pug = require("pug");
const path = require('path');
const routes = require('./routes/routes');
const app = express();

app.set("view engine",'pug');
app.set('views',__dirname + "/views");

const urlencodedParser = express.urlencoded({
    extended: false
});

// redirects 
app.get('/', routes.index);
app.get('/home', routes.index);

app.get('/signup', routes.signupDisplay);
app.post("/signup",urlencodedParser, routes.AddUser);

//app.get('/login',routes.loginDisplay);
//app.post("/login",urlencodedParser, routes.Login);
// app.get('/task', routes.task);

app.listen(3000);