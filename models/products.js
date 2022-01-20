// use mongoose
const mongoose = require('mongoose')

//connect mongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

//design Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//Create Model
let Product = mongoose.model("products",productSchema)

//Export Model
module.exports = Product

//design function save data
module.exports.saveProduct=function(model, data){
    model.save(data)
}