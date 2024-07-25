const asyncHandler = require('express-async-handler');
const Task = require("../models/task-model")

const getAllTasks = asyncHandler( async(req,res) =>{
    const tasks = await Task.find();
    res.status(200).json({message: "Todas as tarefas",data:tasks})
});


const getTask = (req,res) =>{

    res.status(200).json({message:"funcionando"});


}

const createTask = asyncHandler( async(req,res) =>{
    const task = await Task.create({
        title: req.body.name,
        description: req.body.description,
    });


    res.status(200).json({message: "Tarefa criada com sucesso",data:task})
});

const updateTask = (req,res) =>{

    res.status(200).json({message:"funcionando"});


}

const deleteTask = (req,res) =>{

    res.status(200).json({message:"funcionando"});


}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}

