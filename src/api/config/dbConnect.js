import mongoose, { mongo } from "mongoose";

async function connect() {
  mongoose.connect("mongodb+srv://Admin:Admin@intranet.dclizxs.mongodb.net/Intranet?retryWrites=true&w=majority&appName=Intranet");
 
  return mongoose.connection;
};

export default connect;
