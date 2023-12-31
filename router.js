const express = require('express');
const PresignedController = require('./controllers/presignedController');

const route = express.Router();

route.get('/presignedPutObject', (req,res) =>{
    PresignedController.putPresignObject(req,res);
});

module.exports = route;