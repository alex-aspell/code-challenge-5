const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

//mongoose

const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/ccfive_alex';

mongoose.connection.on('connected', function() {
    console.log('mongoose connect to:', databaseUrl);    
})

mongoose.connection.on('error', function (error) {
    console.log('Error on connection:', error);
})

mongoose.connect(databaseUrl);

//router
const messageRouter = require('./routes/message-router');
app.use('/message', messageRouter);

const port = process.env.PORT || 12345

app.listen(port, function () {
    console.log('Listening on port: ', port);
});
