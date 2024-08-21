import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://archana:rR3okHeFksqC77Kj@cluster0.ht4e2tu.mongodb.net/food').then(()=>console.log("DB Connected"));
}

