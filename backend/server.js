const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let projects = []; // 👈 التخزين الحقيقي

// GET
app.get('/projects', (req, res) => {
  res.json(projects);
});

// POST
app.post('/projects', (req, res) => {
  console.log("DATA:", req.body);

  projects.push(req.body);

  res.json({ message: "Saved" });
});

app.listen(3000, () => {
  console.log("Server running...");
});