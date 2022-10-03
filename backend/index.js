const express = require('express');
const mongoose = require('mongoose');
const routeApi = require('./route');
const bodyParser = require('body-parser')
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/yta', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log("connection was established");
}).on('error', (error) => {
    console.log(`can not connect database`, error);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
//app.use(express.urlencoded());

routeApi(app); // bring the api request to route controller to clear handling

app.listen(5000, () => {
    console.log("port 5000 listening now ... ");
});
