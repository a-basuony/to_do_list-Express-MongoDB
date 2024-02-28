const express = require("express");
const connection = require("./configuration/configdb");
const taskRoutes = require("./routes/task.routes");
const app = express();
const port = 3000;

// middleware
app.use(express.json()); // parse the request body

// connect to db
connection();

app.use(taskRoutes);

app.listen(port, () => {
  console.log(`the app running on ${port} `);
});
