const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhilash:9885374233%40jabhi@cluster0.mtxsy.mongodb.net/")
const userschema = new mongoose.schema({
    title : String,
    description : String,
    completed : boolean
})

const todo = mongoose.model('todos',userschema)

module.exports = {todo}