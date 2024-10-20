const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('database connected');
        
    }catch(err){
        console.error("Couldn't connect to Mongo",err);
        
    }
}

module.exports = connectDB;