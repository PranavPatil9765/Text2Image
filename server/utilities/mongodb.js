const express = require('express');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const db = mongoose.model('generated-images',schema);

module.exports = db;