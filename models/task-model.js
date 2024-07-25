const mongoose = require('mongoose');


const taskSchema = mongoose.Schema(
    {
    title:{
        type: String,
        required: [true, "Por favor introduza o titulo"]
    },
    description:{
        type: String,
        required: [true, "Por favor introduza a descricao"]
    },
},
{
    timestamps:true,
}

);

module.exports = mongoose.model("Task",taskSchema);