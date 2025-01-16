import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
const app = express()

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI= process.env.MongoDBURI||"mongodb://localhost:27017";
//mongodb
try {
mongoose.connect(URI,{useNewUrlParser:true,
  useUnifiedTopology: true ,
});
console.log("Connected to Mongodb")
} catch (error) {
  console.error("error",error);
  
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})