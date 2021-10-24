const express =require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

//missleware
app.use(cors());
app.use(express.json());


// user :mydbuser1
// pass : GGK7aIxJoQVxRpSq



const uri = "mongodb+srv://mydbuser1:GGK7aIxJoQVxRpSq@cluster0.aedqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
      const database = client.db("FoodMaster");
      const userCollection = database.collection("users");

        //POST API
        app.post('/users', async(req, res)=>{
            console.log('hitting the post', req.body);
            res.send('hit the post');
        })


    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Runnning my CRUD Server')
});

app.listen(port, ()=>{
    console.log('Running Server on port', port);
})