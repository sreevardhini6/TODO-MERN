const mongoose = require("mongoose");
//
mongoose.connect("mongodb+srv://sreevardhini:password123sree@cluster0.uzzk0tp.mongodb.net/todos")
.then(() => console.log("Connected successfully"))
.catch((err) => console.error("Connection error", err));


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}