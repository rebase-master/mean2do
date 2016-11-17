var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
    id: String,
    title: String,
    completed: Boolean
});

mongoose.model('Todo', TodoSchema);