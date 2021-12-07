const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb+srv://user:pass@taskmangercluster.usykz.mongodb.net/test";
const client = new MongoClient(url)

const databaseName = "MangerDB" //db name
const Profile = client.db(databaseName).collection("Profile"); //create table called Profile
passedRegex = false; //simple bool
const bycrpt = require('bcrypt'); 

//this method is to be used to sign up user to db

// this is  the homepage 
exports.index = async (req, res) => {
    await client.connect()
    personResult = await Profile.findOne({name:"Sally"})
    client.close()
    res.render('Homepage', {
        title:'Home',
        person: personResult
    });
    
};

exports.signupDisplay = (req, res) => {
    res.render('SignUp', {
        title:'Sign up page'
    });
};

exports.taskGet = async (req, res) =>{
    await client.connect()
    getPerson = await Profile.findOne({_id: ObjectId(req.params.id)})
    client.close()
    res.render('Tasks', {
        person: getPerson,
        elementId: req.params.elementId
    })
}

exports.loginDisplay = (req, res) => {
    res.render('Login', {
        title:'Login page'
    });
};

exports.AddUser = async(req,res) =>{
    try{
        await client.connect() //start connection to db
        pass = req.body.password; // password is equal to sign up pass field
        const encryptedPass = SaltAndHash(pass); //salt and hash the user password
        let ProfileDetails = { 
            UserId:ObjectId, //UUID is unique Object Id
            name: req.body.name,
            email:req.body.email,
            Security : {
                password: encryptedPass,
                username:req.body.username,            
            },
            
            Tasks :[ {
                TaskID:ObjectId,
                Title:req.body.taskTitle,
                Description: req.body.Description,
                date:req.body.Date,
                isCompleted: false,
                Priority:false
            }],
            FriendRequest :{ FRequests:ObjectId },
            Friends : { friend:ObjectId }
        }
        const InsertUser = await Profile.insertOne(ProfileDetails); //Inserting to db collection
        InsertUser
        client.close() //closing db
    }catch(Exception){ console.log(Exception); }
    res.redirect("/home");
};

exports.PullUser = async (req,res) => {
    
};


exports.CreateTask = async (req,res) =>{
    await client.connect()

    taskPriority = ""

    console.log(req.body.Yes)
    console.log(req.body.No)

    if(req.body.Yes !== undefined){
        taskPriority = req.body.Yes
    }else if(req.body.No !== undefined){
        taskPriority = req.body.No
    }else{
        console.log("check keys being sent")
    }

    taskIdCreated = new ObjectId();

    getPerson = await Profile.updateOne({_id:ObjectId(req.params.id)},{$push:
        {
        Tasks:{
            taskId: taskIdCreated,
            Title: req.body.taskTitle,
            Description: req.body.descript,
            date: "12/"+ req.params.elementId + "/2021",
            Priority: taskPriority
        }}})
    
    client.close();
    res.redirect("/home")
};


exports.DeleteTask = async (req,res) =>{
    //Identify who is the user?
    await client.close()
    getPerson = await Profile.deleteOne({_id:ObjectId(req.params.id)},{$:



    client.close();
};


//Method is used in SaltAndHash method
const checkRegex = (str) => {
    //regex to verify
    let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let passwordRegex = /(?=.[a-z])(?=.[0-9])(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,}/;
    let nameRegex = /.[a-z].[a-z].*/;
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    let passed = false;
    if(nameRegex.test(str)){ passed = true; }
    if(emailRegex.test(str)){ passed = true; }
    if(usernameRegex.test(str)){ passed = true; }
    if(passwordRegex.test(str)){ passed = true; }
    return passed
};
//Return salt and hash password
const SaltAndHash = (Str) => {
    if(checkRegex(Str)){
        const salt = bycrpt.genSaltSync(10);
        const hash = bycrpt.hashSync(Str,salt)
        return hash
    }
    else{ console.log("SOmething went wrong"); }
};

//To be used for Login page
exports.Login = async(req,res) =>{
    await client.connect();
    UserUname = req.body.username
    UserPassword = req.body.password
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    if(checkAuth && usernameRegex.test(UserUname))
    {
        const result = Profile.findOne({password:UserPassword}).toArray(1);
        console.log(result);
        return result
    }
};


const checkAuth = (str) =>{
    //Check if password matches
    //start a session
    //direct them to home page
    const auth = bycrpt.compare(req.body.password, SaltAndHash);
    if(auth)
    {
        console.log("Your password correctly matched the hash");
        return true;
    }
    else{
        console.log("incorrect password")
        return false
    }
};
