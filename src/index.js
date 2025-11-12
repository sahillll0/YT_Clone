import dotenv from "dotenv"
import connectDB from "./db/index.db.js";
import { app } from "./app.js";


dotenv.config({
    path: './.env'
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000 , ()=>{
      console.log(` MONGO db connected and app listen on port ${process.env.PORT}`);
    })
    app.on("error",(error)=>{
       console.log("DATAbase ERROR", error);
    })
   })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });












// import express from "express"
// const app = express();


// (async ()=>{
//   try {
//    await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//    app.on("error", (error)=>{
//       console.log("EROOR EXP :" , error);
//       throw error
//    })

//   app.listen(process.env.PORT, ()=>{
//      console.log(`app listen on port ${process.env.PORT}`);
     
//   })

//   } catch (error) {
//     console.error("ERROR :", error);
//     throw error
//   }
// })()