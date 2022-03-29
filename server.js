const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");

const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pp925085",
//   database: "Ecommerce",
// });

const db = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user: "bcf040fc1a794a",
    password: "f77a18f9",
    database: "heroku_f8d9680b495b41b"
  });

db.connect((err) => {
  if (err) {
    console.log("error", err);
    return err;
  } else {
    console.log("db connection successful.");
  }
});

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM Products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.use(express.static(path.join(__dirname, "./build")));

app.listen(process.env.PORT || 4000, () => {
  console.log(`console server listening port 4000`);
});
