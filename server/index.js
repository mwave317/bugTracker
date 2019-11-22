const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const  authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '10mb' , extended: false }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', authRoutes);

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true , useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

app.listen(5000);