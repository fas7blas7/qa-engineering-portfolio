const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let users = [];
let id = 1;

app.post("/users", (req, res) => {
  const user = { id: id++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  console.log("=== GET REQUEST ===");
  console.log("ID PARAM:", req.params.id);
  console.log("CURRENT USERS:", users);

  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).json({ message: "Not found" });

  res.json(user);
});

app.patch("/users/:id", (req, res) => {
  console.log("=== UPDATE REQUEST ===");
  console.log("ID PARAM:", req.params.id);
  console.log("REQUEST BODY:", req.body);
  console.log("CURRENT USERS:", users);

  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).json({ message: "Not found" });

  Object.assign(user, req.body);

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("API running on port 3000");
});