
const mongoose=require('mongoose')




const localDB="mongodb://localhost:27017/hospital?retryWrites=true&w=majority"

module.exports = async function connection() {
 try {
     const connectionParams = {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true,
     };
     await mongoose.connect(localDB, connectionParams);
     console.log("connected to database");
 } catch (error) {
     console.log(error);
     console.log("could not connect to database");
 }
};
