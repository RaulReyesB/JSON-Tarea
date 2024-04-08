import taskDao from "../dao/task.dao.js";

export const getAll = (req, res) => {
  taskDao
    .getAll()
    .then((tasks) => res.json({ tasks }))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByCategory = (req, res) => {
  taskDao
    .getByCategory(req.params.category)
    .then((tasks) => res.json(tasks))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByPriority = (req, res) => {
  taskDao
    .getByPriority(req.params.priority)
    .then((tasks) => res.json(tasks))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByDueDate = (req, res) => {
  taskDao
    .getByDueDate(req.params.dueDate)
    .then((tasks) => res.json(tasks))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getOne = (req, res) => {
  taskDao
    .getOne(req.params.taskId)
    .then((task) => {
      !task
        ? res.json({
            message: "Task not found",
          })
        : res.json({ task });
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const insertOne = (req, res) => {
  const task = req.body;
  taskDao
    .insertOne(task)
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const updateOne = (req, res) => {
  const taskId = req.params.taskId;
  const updatedData = req.body;
  console.log('Datos recibidos para la actualización:', updatedData); // Agregar este registro de depuración
  console.log('Fecha recibida:', updatedData.dueDate); // Agregar este registro de depuración
  taskDao
    .updateOne(taskId, updatedData)
    .then((task) => {
      !task
        ? res.json({
            message: "Task not found",
          })
        : res.json(task);
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};


export const deleteOne = (req, res) => {
  taskDao
    .deleteOne(req.params.taskId)
    .then((result) => {
      !result
        ? res.json({
            message: "Task not found",
          })
        : res.json(result);
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
