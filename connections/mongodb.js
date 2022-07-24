const Mongo = require('mongoose');

const dbUSER = process.env["USER_DATABASE"];

const dbPASSWORD = process.env["PASSWORD_DATABASE"];

const DB = process.env["TABLE_DATABASE"];

const dbURI = `mongodb+srv://${dbUSER}:${dbPASSWORD}@sandbox.8hxdl.mongodb.net/${DB}?retryWrites=true&w=majority`;

module.exports = Mongo.connect(dbURI)
.then(console.log("Algo Anda Bien"))
.catch(e => {
    console.log("Algo Anda Mal");
    console.log("ErrorConsole"+e);
});