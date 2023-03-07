const express = require('express');
const app = express();
const mongoose = require('mongoose');
const carRoutes = require('./src/routes/carRoutes');
const {mongodb_url, server_port} = require('./src/configs/index.config');
const cors = require('cors');

// express json
app.use(express.json());

// cors for access-origin
app.use(cors());

// car Routes
app.use('/api/car',carRoutes);

// mongoose connection
mongoose.connect(mongodb_url, {useNewUrlParser: true});
const db = mongoose.connection
db.on('open', () => {
    console.log("Connected to DB");
})
db.on("error", () => {
    console.log("Error connecting to MongoDB");
})

// server listening
app.listen(server_port, () => {
    console.log(`Server is listening on PORT ${server_port}`);
})