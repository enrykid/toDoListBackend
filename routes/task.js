//rutas para tarea
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//api/task
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.put('/:id', taskController.updateTask);
router.get('/:id', taskController.getTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;

