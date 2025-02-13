import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, 
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:', err.message);
    process.exit(1);
  }

const user_schema = new mongoose.Schema({
    email : { type : String, required: true, unique: true},
    password : { type : String, required: true}
})

export const User = mongoose.model("User", user_schema)

const service_schema = new mongoose.Schema({
    name : { type : String, required: true, unique: true}
})

export const Service = mongoose.model("Service", service_schema)


const employee_schema = new mongoose.Schema({
    name : { type : String, required: true, unique: true}
})

export const Employee = mongoose.model("Employee", employee_schema)

const schedule_schema = new mongoose.Schema({
    employee : { type : String, required: true},
    service : { type : String, required: true},
    date : { type : String} ,
    time : { type : String }
})

export const Schedule = mongoose.model("Schedule", schedule_schema)
