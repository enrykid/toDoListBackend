const Task = require("../models/Task");

exports.createTask = async (req, res) =>{
//console.log(req.body);
try {
    let task;
    //crear tarea
    task = new Task(req.body);
   await task.save();
   res.send(task);
} catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
}
}

exports.getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.json(tasks)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getTask = async (req,res)=>{
    try {
        let task = await Task.findById(req.params.id); 
        
        if (!task) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
        res.json(task);
 
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.updateTask = async (req,res)=>{
    try {
        const {description, responsable} = req.body;
        let task = await Task.findById(req.params.id); 
        
        if (!task) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
        task.description = description;
        task.responsable = responsable;

        task = await Task.findByIdAndUpdate({_id: req.params.id},task,{new: task})
        res.json(task);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteTask = async (req,res)=>{
    try {
        let task = await Task.findById(req.params.id); 
        
        if (!task) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
await Task.findOneAndRemove({id_: req.params.id})
        res.json({msg:'Tarea eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

