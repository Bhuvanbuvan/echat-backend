require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');

const app = require('express')();
const http = require('http').Server(app);

const userRoutes = require('./routes/userRoutes');
app.use('/',userRoutes);
http.listen(3000, function(){
    console.log('listening on *:3000');
});
