const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
        },
        responsable: {
            type: String,
            required: true
            },
            dateCreation:{
                type:Date,
                default: Date.now()
            }
});

module.exports = mongoose.model('Task', TaskSchema );