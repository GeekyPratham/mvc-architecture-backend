const express = require("express");
const cors = require("cors")
const app = express();
const dotenv = require("dotenv");
const connectMongodb = require("./connection.js")

dotenv.config();

// connect db
connectMongodb();

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use(cors());

const mainRouter = require("./routes/index") // // Import the routes from the 'routes' folder



app.use("/api/v1" ,mainRouter) // all routes will start with /api/v1

app.listen(5000,()=>{
    console.log('Server running on port 5000');
});