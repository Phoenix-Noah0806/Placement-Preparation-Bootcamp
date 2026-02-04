const express = require("express");
const fs = require("fs/promises");
const app = express();
const path = require("path");
const filePath = path.join(__dirname, "info.json");
const port = 3000;

app.use(express.json());

//reading a file
async function readFile() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// writing a file
async function writeFile(data) {
  await fs.writeFile(filePath, JSON.stringify(data), "utf-8");
}

app.get("/students", async (req, res) => {
  const jsonData = await readFile();
  res.send(jsonData.students);
});

app.get("/students/:id", async (req, res) => {
  const jsonData = await readFile();
  const id = Number(req.params.id);
  const student = jsonData.students.find((i) => i.id === id);

  if (!student) {
    res.status(404).send("Student not found");
    return;
  }
  res.send(student);
});

app.post("/students", async (req, res) => {
  const jsonData = await readFile();
  const student = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    course: req.body.course,
  };
  jsonData.students.push(student);
  await writeFile(jsonData);
  res.send(student);
});

app.put("/students/:id", async (req, res) => {
  const jsonData = await readFile();
  const id = Number(req.params.id);
  const index = jsonData.students.findIndex((i) => i.id === id);
  if (!index) {
    res.status(404).send("Student not found");
    return;
  }
  jsonData.students[index] = {
    id: jsonData.students[index].id,
    name: req.body.name,
    email: req.body.email,
    course: req.body.course,
  };
  await writeFile(jsonData);
  res.send(jsonData.students[index]);
});

app.delete("/students/:id", async (req, res) => {
  const jsonData = await readFile();
  const id = Number(req.params.id);
  const index = jsonData.students.filter((i) => i.id != id);

  if (index.length == jsonData.students.length) {
    console.log("Student not found");
    return;
  }

  jsonData.students = index;
  await writeFile(jsonData);
  res.send("Deletion successful");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
