import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://archana:123456789#9@cluster0.ht4e2tu.mongodb.net/food').then(()=>console.log("DB Connected"));
}

