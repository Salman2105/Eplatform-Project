import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import BookRouter from '../Backend/router/BookRouter.js';
import userRouter from './router/userRouter.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

const URI = process.env.MONGODBURI || "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})
  .then(() => console.log("Connected to mongodb BookStore"))
  .catch((error) => console.error("error", error));

app.use('/api/v1', BookRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});