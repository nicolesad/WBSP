const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb+srv://dbUser:Password@cluster0.0i6jz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url)

const databaseName = "MangerDB"
const Profile = client.db(databaseName).collection("Profile");
passedRegex = false;

exports.AddUser = async (req,res) =>{
    await client.connect()

    let ProfileDetails = {
        UUID : ObjectId,
        name: req.body.name,
        email:req.body.email,
        
        Security = {
            password: Encrypta,
            username:req.body.username,            
        },
        Tasks = {
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
    const InsertUser = await Profile.insertOne(ProfileDetails);
    client.close()
};



const bycrpt = require('bcrypt');

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


const checkRegex = (str) => {
    let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let passwordRegex = /(?=.[a-z])(?=.[0-9])(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,}/;
    let nameRegex = /.[a-z].[a-z].*/;
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    let num = 0;

    passed = false;
    switch(num)
    {
        case 0:
            if(nameRegex.test(str) == true)
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
    if(passed){ return passedRegex = true;}
};

const SaltAndHash = (Str) => {
    if(checkRegex){
        const salt = bycrpt.genSaltSync(10);
        const hash = bycrpt.hashSync()
        return hash
    }
    else{
        console.log("SOmething went wrong");
    }
};


const checkAuth = (req) =>{
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