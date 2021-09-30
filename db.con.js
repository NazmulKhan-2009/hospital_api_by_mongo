
const mongoose=require('mongoose')


const db="mongodb+srv://createZenny:createZenny20@cluster0.qnbwm.mongodb.net/hospital?retryWrites=true&w=majority"

// const localDB="mongodb://localhost:27017/hospital?retryWrites=true&w=majority"

module.exports = async function connection() {
 try {
     const connectionParams = {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true,
     };
     await mongoose.connect(db, connectionParams);
     console.log("connected to database");
 } catch (error) {
     console.log(error);
     console.log("could not connect to database");
 }
};
