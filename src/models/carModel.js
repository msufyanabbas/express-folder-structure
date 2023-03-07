const mongoose = require('mongoose');


const Car = new mongoose.Schema({
    carName: String,
    carModel: String,
});


module.exports = mongoose.model('car', Car);