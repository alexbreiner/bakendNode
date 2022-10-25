const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    user: {
        type: String,
        required: true, 
        max: 100
    },
    pass: {
        type: String, 
        required: true, 
        max: 135
    }
});

module.exports = mongoose.model("Users", UsersSchema);