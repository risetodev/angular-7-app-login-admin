const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const session = require("express-session");
var md5 = require("md5");

mongoose.connect(
  "mongodb://localhost:27017/project",
  { useNewUrlParser: true },
  err => {
    if (err) console.log("Database connection error");
    else console.log("Database connection created");
  }
);

app.use(cors());

app.use(bodyparser.json());

const User = require("./src/app/userSchema");

app.post("/register", (req, res) => {
  var user = new User();
  user.email = req.body.email;
  user.password = md5(req.body.password);
  user.role = req.body.role;

  User.find({ email: user.email }, (err, result) => {
    if (err) return res.send({ status: "error" });
    if (result.length == 0) {
      // didn't find the same e-mail
      user.save((err, result) => {
        if (err) return res.send({ status: "error" });
      });
      return res.send({ status: "success" });
    } else return res.send({ status: "error" });
  });
});

app.post("/login", (req, res) => {
  User.find(
    {
      email: req.body.email,
      password: md5(req.body.password)
    },
    (err, result) => {
      if (err) return res.send({ status: "error" });
      if (result.length != 0) {
        if (result != null) {
          return res.send({
            email: result[0].email,
            role: result[0].role
          });
        } else return res.send({ status: "role error" });
      } else return res.send({ status: "Invalid user" });
    }
  );
});

app.get("/users", (req, res) => {
  User.find(
    {},
    {
      email: 1,
      role: 1
    },
    (err, result) => {
      if (err) return res.send({ status: "error" });
      if (result.length != 0) {
        return res.send({
          status: "success",
          users: result
        });
      } else return res.send({ status: "error" });
    }
  );
});

app.post("/updateUser", (req, res) => {
  User.updateOne(
    { email: req.body.email },
    {
      $set: {
        role: req.body.role
      }
    },
    (err, result) => {
      if (err) return res.send({ status: "error" });
      if (result.length != 0) {
        return res.send({ status: "success" });
      }
    }
  );
});

app.post("/deleteUser", (req, res) => {
  User.remove(
    {
      email: req.body.email
    },
    (err, result) => {
      if (result.length != 0) {
        return res.send({ status: "success" });
      }
    }
  );
});

app.listen(3000, () => console.log("Server running on port 3000!"));
