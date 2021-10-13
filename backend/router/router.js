const express = require('express');
const router = express.Router(); 

const { getTaskAllTasks, postTask, getSingleTask, patchTask, deleteTask } = require('../controllers/controller'); 
router.get('/',getTaskAllTasks)
router.post('/',postTask)
router.get('/:id', getSingleTask); 
router.patch('/:id',patchTask)
router.delete('/:id',deleteTask)

module.exports = router; 
