const mongodb = require('mongoose');

const Schema = mongodb.Schema;

const registerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: String,
    values: {
        Value1: Number,
        Value2: Number,
        Value3: Number,
        Value4: Number,
        Value5: Number
    }
});

const Register = mongodb.model('Register', registerSchema);

module.exports = Register;