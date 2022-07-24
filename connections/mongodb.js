const Mongo = require('mongoose');

const dbUSER = "dev_EchoTech";

const dbPASSWORD = "simple_Password1234";

const DB = "echoTech_Irrigation";

const dbURI = `mongodb+srv://${dbUSER}:${dbPASSWORD}@sandbox.8hxdl.mongodb.net/${DB}?retryWrites=true&w=majority`;

module.exports = Mongo.connect(dbURI)
.then(console.log("Algo Anda Bien"))
.catch(e => {
    console.log("Algo Anda Mal");
    console.log("ErrorConsole"+e);
});