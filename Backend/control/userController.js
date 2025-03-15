import User from "../model/userModel.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => { 
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully",user:{
            id:user._id,
            name:user.name,
            email:user.email
        }});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {

 try {
   const {email,password} =req.body;
   const user = await User.findOne({email});
   const match= await bcrypt.compare(password, user.password);
   if(!user ||!match){
     return res.status(401).json({message:"Invalid credentials"});
   }
   else{
     res.status(200).json({message:"Login successful",user:{
         id:user._id,
         name:user.name,
         email:user.email
     }});
   }
 } catch (error) {
    
    console.error(error.message);
    res.status(500).json({message:"Server error"});
 }
}