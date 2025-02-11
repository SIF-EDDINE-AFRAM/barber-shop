import express from "express"
import { add_employees, delete_employees, get_employees, modify_employees } from "../controllers/employees.controller.mjs"
const employee_router = express.Router()

employee_router.get("/employees", get_employees)
employee_router.post("/employees", add_employees)
employee_router.put("/employees/:id", modify_employees)
employee_router.delete("/employees/:_id", delete_employees)


export default employee_router