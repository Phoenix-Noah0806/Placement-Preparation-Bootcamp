const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // middleware

app.get("/students", (req, res) => {
  fs.readFile(path.join(__dirname, "info.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("Error While Reading data");
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.get("/students/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "info.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("Error While Reading data");
      return;
    }
    const jsonData = JSON.parse(data);
    const id = Number(req.params.id);

    const student = jsonData.students.find((i) => i.id === id);
    if (!student) {
      console.log("Student not found");
      return;
    }
    res.json(student);
  });
});

app.post("/students", (req, res) => {
  fs.readFile(path.join(__dirname, "info.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("Error while reading data");
      return;
    }
    const jsonData = JSON.parse(data);
    const newStudent = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
    };

    jsonData.students.push(newStudent);

    fs.writeFile(
      path.join(__dirname, "info.json"),
      JSON.stringify(jsonData),
      "utf-8",
      (err) => {
        if (err) {
          console.log("Error while writing data");
        }
        res.json(newStudent);
      },
    );
  });
});

app.put("/students/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "info.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("Error while reading data");
      return;
    }
    const jsonData = JSON.parse(data);
    const id = Number(req.params.id);
    const index = jsonData.students.findIndex((i) => i.id === id);

    if (index == -1) {
      console.log("Student not found");
      return;
    }
    jsonData.students[index] = {
      id: jsonData.students[index].id,
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
    };

    fs.writeFile(
      path.join(__dirname, "info.json"),
      JSON.stringify(jsonData),
      "utf-8",
      (err) => {
        if (err) {
          console.log("Error");
        }
        res.json(jsonData.students[index]);
      },
    );
  });
});

app.delete("/students/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "info.json"), "utf-8", (err, data) => {
    if (err) {
      console.log("Error while Reading the data");
    }
    const jsonData = JSON.parse(data);
    const id = Number(req.params.id);
    const filter = jsonData.students.filter((i) => i.id != id);

    if (filter.length === jsonData.students.length) {
      console.log("Student not found");
    }
    jsonData.students = filter;
    fs.writeFile(
      path.join(__dirname, "info.json"),
      JSON.stringify(jsonData),
      "utf-8",
      (err) => {
        if (err) {
          console.log("Error while writing data");
        }
        res.json({ message: "Student deleted successfully" });
      },
    );
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
