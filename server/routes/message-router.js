const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    comment: String
});

const Message = mongoose.model('Message', MessageSchema, 'message');

router.post('/', (request, response) => {
    let newMessage = new Message(request.body);
    console.log('New message to add', request.body);
    newMessage.save((error, sendMessage) => {
        if (error){
            console.log('Error on add message', error);
            response.sendStatus(500);
        } else {
            response.sendStatus(201);
        }
    })
})

router.get('/', (request, response) => {
    Message.find({}, (error, gotMessages) => {
        if (error){
            console.log('Error on get messages', error);
            response.sendStatus(500);
        } else {
            response.send(gotMessages);
        }
    })
})


module.exports = router; 