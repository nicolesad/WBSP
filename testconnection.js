const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:Password@cluster0.0i6jz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  isConnected()
  client.close();
})

function isConnected() {
    console.log(!!client && !!client.topology && client.topology.isConnected())
  }