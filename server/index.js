require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const  authRoutes = require('./routes/authRoutes');
const  ticketRoutes = require('./routes/ticketRoutes');
const typeRoutes = require('./routes/typeRoutes');
const path = require('path');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


  app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.use('/', authRoutes);
app.use('/ticket', ticketRoutes);
app.use('/type', typeRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '..','server', 'views', '404.html'))
})

mongoose.connect(process.env.mongoURI, { useUnifiedTopology: true , useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT);