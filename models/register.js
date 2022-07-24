const mongodb = require('mongoose');

const Schema = mongodb.Schema;

const registerSchema = new Schema({
    date: Date,
    begin_values: {
        led: Number,
        temperature: Number,
        moisture: Number,
        water: Number,
        motor: Number
    },
    end_values: {
        led: Number,
        temperature: Number,
        moisture: Number,
        water: Number,
        motor: Number
    }
});

const Register = mongodb.model('Register', registerSchema);

module.exports = Register;