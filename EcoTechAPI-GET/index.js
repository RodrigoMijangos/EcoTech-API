const Register = require('../models/register');

const conn = require('../connections/mongodb');

module.exports = async function (context,req) {
    try {
        const registers = await Register.find().sort('-date');

        context.res = {
            status: 200, /* Defaults to 200 */
            body: registers
        };

    } catch (error) {
        context.log(error);
        
        context.res = {
            status: 500, /* Defaults to 200 */
            body: {Error: "Algo anda mal", Context: error}
        };
    }
}