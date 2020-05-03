const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://<username>:<password>@cluster0-duzlk.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World')
});

const PORT = 5000;

app.listen(PORT, () => { console.log(`server started at port ${PORT}`) });