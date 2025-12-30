import Task from '../models/Task.js';

//Create Task
export const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            user: req.user.id,
        })

        res.status(201).json(task)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//Get My Task
export const getMyTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        })

        res.json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Update Task
export const updateTask = async (req, res) => {
    try {
        const updated = await Task.findOneAndUpdate(
            { _id: user.req.params, user: req.user.id },
            req.body,
            { new: true },
        );
        res.json(updated)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

//Delete Task
export const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.findOneAndDelete(
            { _id: req.params.id, user: req.user.id }
        );

        if (!deleted) {
            res.json({ message: 'Task not found' });
        }
        res.json({ message: 'Task Deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};