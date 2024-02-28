const Task = require("../models/task");
const router = require("express").Router();

//  Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: { tasks } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/addTask", async (req, res) => {
  try {
    const { title, description } = req.body;
    // const task = await Task.create({ title, description });
    const task = new Task({ title, description });
    await task.save();
    res.status(200).json({ message: "added successfully!", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/updateTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    // const updatedTask = await Task.findByIdAndUpdate(id, title, { new: true }); // {new:true} to get the object after update
    const updatedTask = await Task.updateOne({ _id: id }, { title: title });
    res.status(200).json({ message: "updated Successfully!", updatedTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.deleteOne({ _id: id });

    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/searchTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await Task.find({ _id: id });
    res.status(200).json({ message: "Success get task by id", singleTask });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
