const express = require("express");
const pug = require("pug");
const path = require('path');
const routes = require('./routes/routes');
const app = express();

app.set("view engine",'pug');
app.set('view',__dirname + "/views");

const urlencodedParser = express.urlencoded({
    extended: false
});

// redirects 
app.get('/', routes.index);
app.get('/home', routes.index);
app.get('/signup', routes.AddUser);
// app.get('/task', routes.task);
// app.get('/login',routes.login);

app.listen(3000);