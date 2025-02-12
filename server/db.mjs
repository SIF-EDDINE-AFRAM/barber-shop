import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/barber")
.then(()=> console.log("connected"))
.catch((err)=> console.log(err))

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
    date : { type : Date} ,
    time : { type : String }
})

export const Schedule = mongoose.model("Schedule", schedule_schema)
