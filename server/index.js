const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true , useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

const app = express();


app.get('/', (req, res) => {
res.send('Good Morning');
});

app.listen(5000);