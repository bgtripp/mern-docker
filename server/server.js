// server.js
const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
const path = require('path');

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