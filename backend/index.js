const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 0, task: "Learn React", completed: false },
  { id: 1, task: "Learn Express", completed: false },
];

app.get("/", (req, res) => {
  console.log("ping detected");
  res.send("Hello from Express!");
});

app.get("/api/todos", (req, res) => {
  console.log("ping detected");
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  console.log("req.body:\n", req.body);
  const newTodo = {
    id: todos.length,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  //   res.status(201).json(newTodo);

  res.status(201).send(newTodo);

  //   res.status(201).send(todos);
});

app.put("/api/todos/:id", (req, res) => {
  console.log("\n\nUpdate Recieved:\n", req.params);
  todos[parseInt(req.params.id)].completed =
    !todos[parseInt(req.params.id)].completed;
  res.send(todos);
});
app.delete("/api/todos/:id", (req, res) => {
  console.log("\nDelete Recieved:\n", req.params);
  let deleted = todos.filter((e) => e.id != parseInt(req.params.id));
  console.log("Deleted:\n", deleted);
  //  let x = deleted.forEach((e,i)=> e.id = i)
  //  todos = x
  // console.log('Todos:\n',todos)
  todos = [];
  deleted.forEach((e, i) => {
    todos.push({
      id: i,
      task: e.task,
      completed: e.completed,
    });
  });
  console.log("Todos:\n", todos);
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
