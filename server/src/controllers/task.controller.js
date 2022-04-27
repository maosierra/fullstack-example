const { Task, User } = require('../database/models');

taskController = {}

taskController.getAllTasks = async (req, res) => {
    const tasks = await Task.findAll({
        where: { UserId: req.auth.id }
    });
    res.json(tasks);
}

taskController.createTask = async (req, res) => {
    const { description } = req.body;
    const task = await Task.create({ description, UserId: req.auth.id });
    res.json(task);
}

module.exports = taskController;