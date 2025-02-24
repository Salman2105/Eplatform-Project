import Book from '../model/bookModel.js'

 const getBook =async(req,res)=>{

    try{
        const book =await Book.find()
        res.status(200).json(book)

    }catch(err){
        console.log("error", err);
        res.status(500).json({message: "Server Error"})
}}



export default getBook;