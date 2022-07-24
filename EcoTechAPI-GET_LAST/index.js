const Register = require('../models/register');

module.exports = async function (context,req) {
    try {
        const register = await Register.findOne().sort('-date');

        context.res = {
            status: 200, /* Defaults to 200 */
            body: register
        };

    } catch (error) {
        context.log(error);
        
        context.res = {
            status: 500, /* Defaults to 200 */
            body: {Error: "Algo anda mal"}
        };
    }
}