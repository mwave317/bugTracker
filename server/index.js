const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');
const  authRoutes = require('./routes/authRoutes');
const  ticketRoutes = require('./routes/ticketRoutes');

app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '10mb' , extended: false }));



app.use('/', authRoutes);
app.use('/ticket', ticketRoutes);
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true , useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT || 5000);