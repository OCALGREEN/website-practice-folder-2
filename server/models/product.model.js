const mongoose = require("mongoose") 

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"], 
        minlength: [3, "Title must be greater than 3 characters"]
    }, 
    price: {
        type: Number, 
        required: [true, "Price is required"], 
        min: [.1, "Price must be greater than 0"] 
    }, 
    description: {
        type: String, 
        required: [true, "Description is required"], 
        minlength: [3, "Description must be greater than 3 characters"]
    }
}, {timestamp: true})

module.exports.Product = mongoose.model("Product", ProductSchema) 