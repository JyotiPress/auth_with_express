const express = require('express');
const app = express();
const authRouter = require('./router/authRout');

app.use(express.json());
app.use('/api/auth', authRouter);

app.use('/',(req, res) => {
    res.status(200).json({data:'JWTauth server'})
});

module.exports = app;

