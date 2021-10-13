const Task = require('../Tasks/schema')

const getTaskAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

const postTask = async(req, res) => {
    const {addTask} = req.body;
     console.log(addTask);
    try {
        const task = await Task.create({name:addTask});
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleTask = async(req, res) => {

    try {
        const { id } = req.params;
        const oneTask = await Task.findOne({ _id: id });
        console.log(oneTask);
        if (!oneTask) {
            return res.status(404).json({ id: 'invalid', msg: `${id} not found` })
        }
        res.status(201).json({ oneTask })
    } catch (err) {
        res.status(500).json(err);
    }
};

const patchTask = async (req, res) => {
        try {
        const { id } = req.params;
        const oneTask = await Task.findOneAndUpdate({ _id: id },req.body,{
            new:true,
            runValidators:true
        });
        if (!oneTask) {
            return res.status(404).json({ id: 'invalid', msg: `${id} not found item hasn't been updated` })
        }
        res.status(201).json({ msg:`${id} has been updated`, newTask: oneTask })
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteTask = async (req, res) => {
       try {
        const { id } = req.params;
        const oneTask = await Task.findOneAndDelete({ _id: id });
        if (!oneTask) {
            return res.status(404).json({ id: 'invalid', msg: `${id} not found` })
        }
        res.status(201).json({ id:`${id}`, msg: `Item Deleted`, sucess: true })
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { getTaskAllTasks, postTask, getSingleTask, patchTask, deleteTask };