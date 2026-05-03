import cookieParser from "cookie-parser";
import express from "express";
import bcrypt from "bcrypt";
const app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  res.cookie("name", "harsh");
  console.log(req.cookies);
  // Encryption
  //     bcrypt.genSalt(10, function(err, salt) {
  //     bcrypt.hash("password", salt, function(err, hash) {
  //         console.log(hash)
  //     });
  //
  // });
  // Load hash from your password DB.
  //Chekcs if our entered password matches encrypted password or not
  bcrypt.compare("passwor", "$2b$10$w4uPyz4ze0k8aSWqKYfUSuNcBja4ID5emnhBhQFa3HSqyOIx5CFNW", function (err, result) {
    console.log(result)
  });
  res.send("Done");
});

app.listen(3000);
