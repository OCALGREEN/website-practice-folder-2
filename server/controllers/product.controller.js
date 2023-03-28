const { Product } = require("./../models/product.model")

// test
module.exports.message = (req, res) => {
    res.json("message from backend") 
}

// create 
module.exports.createOne = (req, res) => {
    Product.create(req.body) 
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}

// read one 
module.exports.readOne = (req, res) => {
    const id = req.params.id // the name of the prams will depend on the routes 
    Product.findOne({ _id: id }) // _id is from mongoDB and id is from the params id
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}

// read all 
module.exports.readAll = (req, res) => {
    Product.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// update = get one + create
module.exports.updateOne = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        { _id: id}, // filter out the Product with the id 
        req.body, // the data to be updated 
        { new: true, runValidators: true } // options 
    )
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}

// delete 
module.exports.deleteOne = (req, res) => {
    Product.deleteOne({ _id: req.params.id }) 
        .then(response => res.json(response)) 
        .catch(err => res.status(400).json(err)) 
}