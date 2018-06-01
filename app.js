const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bucketlistController = require('./controllers/bucketlist');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
mongoose.Promise = global.Promise;

const database = 'mongodb://localhost:27017/bucketlist';
mongoose.connect(database);
/*app.all('*', function (req, res, next) {

	console.log(` Service called Url: ${req.originalUrl}, Method : ${req.method}`)
});*/

app.use('/bucketlist', bucketlistController);

app.listen(port, () =>{
  console.log('app is starting on port ' + port);
});
