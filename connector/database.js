const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const connect = await  mongoose.connect(process.env.MONGO_URL);
        console.log(`Base de dados conectada: ${connect.connection.host}`); 
    }catch (error) {
        console.log(error);
      }
}

module.exports = connectDB;