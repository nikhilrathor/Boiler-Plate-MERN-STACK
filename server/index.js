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

const port = 5000 || process.env.PORT;

app.listen(port, () => { console.log(`server started at port ${port}`) });