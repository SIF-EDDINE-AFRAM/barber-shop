import express from "express"
import { add_schedule, delete_schedule, get_schedules } from "../controllers/schedule.controller.mjs"
const schedule_router = express.Router()

schedule_router.get("/schedules", get_schedules)
schedule_router.post("/schedules", add_schedule)
// schedule_router.put("/schedules/:_id", modify_schedule)
schedule_router.delete("/schedules/:_id", delete_schedule)


export default schedule_router