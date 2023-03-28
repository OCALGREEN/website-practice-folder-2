const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/product/message", ProductController.message) 
    app.get("/product/readOne/:id", ProductController.readOne) 
    app.get("/product/readAll", ProductController.readAll) 
    app.post("/product/createOne", ProductController.createOne) 
    app.put("/product/updateOne/:id", ProductController.updateOne) 
    app.delete("/product/deleteOne/:id", ProductController.deleteOne) 
}