const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(500).send("Hi");
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);