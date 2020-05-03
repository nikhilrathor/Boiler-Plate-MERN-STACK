const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const users = require('./routes/api/users');
const config = require('./config/key');

mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', users);

const PORT = 5000;

app.listen(PORT, () => { console.log(`server started at port ${PORT}`) });