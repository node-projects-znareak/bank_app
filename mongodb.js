const Mongoose = require("mongoose");
const msj = require("./helpers/messages");

const CONNECTION_TOTAL_TRIES = 4;
let connectionTries = 1;
const connection = Mongoose.connection;
const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connection.on("connecting", () => {
  msj.info("Connecting to database in " + uri + "...");
});

connection.on("connected", () => {
  msj.success("Connect to database in " + uri);
});

connection.on("error", (err) => {
  msj.error("Error in connect to mongodb", err);
});

connection.on("disconnected", () => {
  msj.error("Disconnected to mongodb");
});

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

module.exports = async function connectDb(cb) {
  try {
    return Mongoose.connect(uri, options, cb);
  } catch (err) {
    message.error("Error in connect to mongodb", err);
    const id = setTimeout(() => {
      if (connectionTries === CONNECTION_TOTAL_TRIES) return clearTimeout(id);
      console.warn(`Reconnecting to mongodb server {${connectionTries}}...`);
      connectionTries++;
      connectDb();
    }, 4000);
  }
};
