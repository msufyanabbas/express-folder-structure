const Car = require('../models/carModel');

const createCar = async (req, res) => {
    let car = await new Car(req.body).save();
    return res.status(201).json({message: "Car added to MongoDB", car})
}

module.exports = {
    createCar
}