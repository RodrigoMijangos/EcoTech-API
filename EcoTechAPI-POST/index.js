const Register = require('../models/register');

const conn = require('../connections/mongodb');

module.exports = async function(context, req){
    context.res = {
        status: 201,
        body: "Creado"
    }   
}