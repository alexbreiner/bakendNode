// Connect with mongodb
const mongoose = require('mongoose');

const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    console.warn("Conexion exitosa")
    dbConnection.on("error", console.error.bind(console, 'Mongodb connection error'));
}

/*mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});*/

