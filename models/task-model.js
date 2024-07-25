const mongoose = require('mongoose');


const taskSchema = mongoose.Schema(
    {
    title:{
        type: String,
        require: [true, "Por favor introduza o titulo"]
    },
    description:{
        type: String,
        require: [true, "Por favor introduza a descricao"]
    },
},{
    timestamps:true,
}

);

module.exports = mongoose.model("Task",taskSchema);