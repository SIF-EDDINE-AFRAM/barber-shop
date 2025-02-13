import express from "express"
import Login, { Signup } from "./controllers/auth.controllers.mjs"
import { verifyToken } from "./controllers/auth.controllers.mjs"
import employee_router from "./routes/employees.routes.mjs"
import services_router from "./routes/services.route.mjs"
import schedule_router from "./routes/schedules.routes.mjs"
import bcrypt from 'bcrypt'

import { User } from "./db.mjs"
const router = express.Router() 
router.post('/login',Login)
router.get('/check_cookie',verifyToken,(req,res)=>res.send('verified_test'))
router.post("/signup", Signup)

router.use(employee_router)
router.use(services_router)
router.use(schedule_router)
export default router
