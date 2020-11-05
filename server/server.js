// server.js
const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
const path = require('path');

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});
// Our DB Configuration
require('./src/database');

app.use(cors());


app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

const bodyParser = require('body-parser');

// Routes
const todoRoutes = require('./src/routes/todo.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/todos', todoRoutes);