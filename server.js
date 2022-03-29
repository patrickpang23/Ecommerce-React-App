const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");

const app = express();

let connection;

// This sets the connection
const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "bcf040fc1a794a",
  password: "f77a18f9",
  database: "heroku_f8d9680b495b41b",
};

app.use(cors());
app.use(express.json());

// if connection does not exist, return empty array
app.get("/api/products", (req, res) => {
  if (!connection) res.send([]);

  connection.query("SELECT * FROM Products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// express.static returns the assets(html, css, javaScript, images, etc) to the browser
app.use(express.static(path.join(__dirname, "./build")));

// fixed refresh button
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

// process is an object from node. env is an object that contains the environment variables that node has access to.
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`console server listening port ${port}`);
});

// This function helps with server not being disconnected from mySQL db
function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  // If connection is lost and err is protocol_connection_lost, it will try to reconnect by calling itself. Else it will throw an err.
  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

// if heroku app fails, type in "heroku restart" in terminal
