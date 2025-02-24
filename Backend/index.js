import express from 'express';
import dotenv    from  "dotenv";
import mongoose from 'mongoose';
import router from '../Backend/router/BookRouter.js'

const app = express()
// app.use('/api/v1',bookRoute)

dotenv.config();
app.get('/get',(req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1',router)
const URI= process.env.MONGODBURI||"mongodb://localhost:27017"
const PORT = process.env.PORT || 4000;
//mongodb
try {
mongoose.connect(URI,{useNewUrlParser:true,
  // useUnifiedTopology: true ,
});
console.log("Connected to mongodb");
console.error("error",error);
} catch (error) {
}


//connete mongodb


console.log(`Example app listening on port ${PORT}`)
app.listen(PORT, () => {
})