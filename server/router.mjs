import express from "express"
import Login from "./controllers/auth.controllers.mjs"
import { verifyToken } from "./controllers/auth.controllers.mjs"
import employee_router from "./routes/employees.routes.mjs"
const router = express.Router() 
router.post('/login',Login)
router.get('/test',verifyToken,(req,res)=>res.send('verified_test'))

router.use(employee_router)
export default router
