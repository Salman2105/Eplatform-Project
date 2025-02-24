import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const   BOOK =mongoose.model('Book', bookSchema);
export default BOOK;
