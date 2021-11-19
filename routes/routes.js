const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb+srv://dbUser:Password@cluster0.0i6jz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url)

const databaseName = "MangerDB" //db name
const Profile = client.db(databaseName).collection("Profile"); //create table called Profile
passedRegex = false; //simple bool
const bycrpt = require('bcrypt'); 

<<<<<<< HEAD
//this method is to be used to sign up user to db
=======
// this is  the homepage 
exports.index = async(req, res) => {
    res.render('index', {
        title:'Home'
    });
};

<<<<<<< HEAD
>>>>>>> 6e8cbeabbf8a5ccd1927e8b74f074820bb42b3e4
=======
// this is  the homepage 
exports.index = async(req, res) => {
    res.render('index', {
        title:'Home'
    });
};

>>>>>>> 6e8cbeabbf8a5ccd1927e8b74f074820bb42b3e4
exports.AddUser = async (req,res) =>{
    await client.connect() //start connection to db
    pass = req.body.password; // password is equal to sign up pass field
    const encryptedPass = SaltAndHash(pass); //salt and hash the user password
    let ProfileDetails = { 
        UUID : ObjectId, //UUID is unique Object Id
        name: req.body.name,
        email:req.body.email,
        
        Security : {
            password: encryptedPass,
            username:req.body.username,            
        },
        Tasks : {
            TaskID:ObjectId,
            Title:req.body.taskTitle,
            Description: req.body.Description,
            isCompleted: false,
            Priority:false
        },

        FriendRequest={
            FRequests:ObjectId
        },
        Friends = {
            friend:ObjectId
        }
    }
    const InsertUser = await Profile.insertOne(ProfileDetails); //Inserting to db collection
    client.close() //closing db
};

exports.PullUser = async (req,res) => {

};

exports.DeleteTask = async (req,res) =>{
    //Identify who is the user?
    deleteT
};

const deleteT = (ObjectId) =>{
    await client.connect();
    const d = await Profile.deleteOne(Del => ProfileDetails.TaskID == ObjectId);
    
    client.close();
    return d;
};

//Method is used in SaltAndHash method
const checkRegex = (str) => {
    //regex to verify
    let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let passwordRegex = /(?=.[a-z])(?=.[0-9])(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,}/;
    let nameRegex = /.[a-z].[a-z].*/;
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    let num = 0;
    passed = false;
    //Switch case to check regex
    switch(num)
    {
        case 0:
            if(nameRegex.test(str) == true) // test regex
            {
                passed = true
                num +=1;
            }
        break
        case 1:
            passed = false
            if(emailRegex.test(str) == true)
            {
                passed = true
                num +=1;
            }
            
        break
        case 2:
        passed = false
        if(usernameRegex.test(str) == true)
            {
                passed = true
                num +=1;
            }
        break
        case 3:
            passed = false
            if(passwordRegex.test(str) == true)
            {
                passed = true
                num +=1;
            }
            
        break
    }
    if(passed){ return passedRegex = true; num= 0} //returns bool when passed
};
//Return salt and hash password
const SaltAndHash = (Str) => {
    if(checkRegex(str)){
        const salt = bycrpt.genSaltSync(10);
        const hash = bycrpt.hashSync()
        return hash
    }
    else{
        console.log("SOmething went wrong");
    }
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



exports.LogoutUser() = async (req, res) => {
    
};