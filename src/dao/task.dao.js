import Task from "../models/task.model.js";

const taskDao = {};

taskDao.getAll = async () => {
    const tasks = await Task.find();
    return tasks;
};

taskDao.getOne = async (taskId) => {
    const task = await Task.findById(taskId);
    return task;
};

taskDao.getByCategory = async (category) => {
    const tasks = await Task.find({ category: category });
    return tasks;
};

taskDao.getByPriority = async (priority) => {
    const tasks = await Task.find({ priority: priority });
    return tasks;
};

taskDao.getByDueDate = async (dueDate) => {
    const tasks = await Task.find({ dueDate: dueDate });
    return tasks;
};

taskDao.insertOne = async (task) => {
    return await Task.create(task);
};

taskDao.updateOne = async (taskId, task) => {
    console.log("Datos recibidos para la actualización en el dao:", task); 
    const updatedTask = await Task.findByIdAndUpdate(taskId, task, { new: true });
    console.log("Tarea actualizada:", updatedTask);
    return updatedTask;
};


taskDao.deleteOne = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
};

export default taskDao;
