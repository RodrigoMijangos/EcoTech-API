const Register = require('../models/register');

module.exports = async function(context, req){

    const id = req.body._id;

    const body = req.body;

    try {
        await Register.findByIdAndUpdate(id, body);

        context.res = {
            status: 200,
            body: "Editado"
        };
    } catch (error) {
        
        context.log(error);

        context.res = {
            status: 500,
            body: {error: "Algo anda mal"}
        }

    }
}