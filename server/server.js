// import all dependencies 
const express = require("express")
const cors = require("cors") 
const app = express() 

// config mongoose
require("./configs/mongoose.config") 

// epxress config for post 
app.use(cors()) 
app.use(express.json(), express.urlencoded({extended: true})); 

// routes
require("./routes/product.routes")(app) 

// listen for the port
app.listen(8000, () => console.log("The server is all fired up on port 8000")); 