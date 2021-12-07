const express = require("express");
const pug = require("pug");
const path = require('path');
const routes = require('./routes/routes');
const app = express();

const takeToTask = (req,res) => {
    res.redirect("/Tasks");
}



//ay1.addEventListener("click", takeToTask);

app.set("view engine",'pug');
app.set('views',__dirname + "/views");

app.use(express.static(path.join(__dirname, '/public')))

const urlencodedParser = express.urlencoded({
    extended: false
});

// redirects 
app.get('/', routes.index);
app.get('/home', routes.index);

app.get('/signup', routes.signupDisplay);
app.post("/signup",urlencodedParser, routes.AddUser);

app.get('/Tasks/:id/:elementId', routes.taskGet)
app.post('/createTask/:id/:elementId', urlencodedParser, routes.CreateTask)


//app.get('/login',routes.loginDisplay);
//app.post("/login",urlencodedParser, routes.Login);
//app.get('/task', routes.task);

app.listen(3000);