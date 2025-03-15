const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors({
  origin: ['http://localhost:5173', 'https://coffee-store-client-six.vercel.app'],
  credentials: true
}));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sk4ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Create cached connection variable
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // If we already have a connection, use it
    return { client: cachedClient, db: cachedDb };
  }
  
  // If no connection, create a new one
  await client.connect();
  const db = client.db('coffeeDB');
  
  // Set cache
  cachedClient = client;
  cachedDb = db;
  
  return { client, db };
}

async function run() {
  try {
    const { db } = await connectToDatabase();
    const coffeeCollection = db.collection('coffee');
    const userCollection = db.collection('user');

    app.get('/coffee', async(req, res) => { 
      try {
        const cursor = coffeeCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
        res.status(500).send({ error: "Failed to fetch coffee data" });
      }
    });

    app.get('/coffee/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await coffeeCollection.findOne(query);
        res.send(result);
      } catch (error) {
        console.error("Error fetching coffee by ID:", error);
        res.status(500).send({ error: "Failed to fetch coffee details" });
      }
    });

    app.post('/coffee', async(req, res) => {
      try {
        const newCoffee = req.body;
        console.log(newCoffee);
        const result = await coffeeCollection.insertOne(newCoffee);
        res.send(result);
      } catch (error) {
        console.error("Error adding coffee:", error);
        res.status(500).send({ error: "Failed to add coffee" });
      }
    });

    app.put('/coffee/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};
        const updatedCoffee = req.body;
        const coffee = {
          $set: {
            name: updatedCoffee.name,
            quantity: updatedCoffee.quantity,
            details: updatedCoffee.details,
            price: updatedCoffee.price,
            photo: updatedCoffee.photo,
            taste: updatedCoffee.taste
          }
        };

        const result = await coffeeCollection.updateOne(filter, coffee, options);
        res.send(result);
      } catch (error) {
        console.error("Error updating coffee:", error);
        res.status(500).send({ error: "Failed to update coffee" });
      }
    });

    app.delete("/coffee/:id", async(req, res) => {
      try {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await coffeeCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        console.error("Error deleting coffee:", error);
        res.status(500).send({ error: "Failed to delete coffee" });
      }
    });

    // user related api 
    app.get("/users", async(req, res) => {
      try {
        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Failed to fetch users" });
      }
    });

    app.post('/users', async(req, res) => {
      try {
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send({ error: "Failed to add user" });
      }
    });

    app.patch('/users', async(req, res) => {
      try {
        const email = req.body.email;
        const filter = {email};
        const updateDoc = {
          $set: {
            lastSignInTime: req.body?.lastSignInTime
          }
        };
        const result = await userCollection.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send({ error: "Failed to update user" });
      }
    });

    app.delete('/users/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await userCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({ error: "Failed to delete user" });
      }
    });

  } catch (error) {
    console.error("Database connection error:", error);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Coffee making server is running');
});

app.listen(port, () => {
    console.log(`Coffee server is running on port: ${port}`);
});