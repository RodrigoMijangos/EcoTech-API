const Register = require('../models/register');

const conn = require('../connections/mongodb');

module.exports = async function(context, req){

    const body = req.body;

    try {

        const register = new Register(body);

        const respuesta = await register.save();

        context.res = {
            status: 201,
            body: {value: respuesta}
        }

    } catch (error) {   
        context.log({error: "Error", message: error});
    }
}