// create server
const express = require('express');
const app = express();

// load config from env file
 require("dotenv").config();
 const PORT =  process.env.PORT || 3000;

//  middleware to parse json request body
app.use(express.json());

// import routes for todo api
const blogRoutes = require("./routes/blog");

// mount the todo aspi routes
app.use("/api/v1",blogRoutes);

// start server
app.listen(PORT,() => {
    console.log(` Server stared Successfully at ${PORT} `) 
});


// connnect the db 
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req, res) =>{
    res.send('<h1> this is Blogpage </h1>');
});

