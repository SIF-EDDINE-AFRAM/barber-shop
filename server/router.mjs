import express from "express"
import Login from "./controllers.mjs"
import { verifyToken } from "./controllers.mjs"
const router = express.Router() 
       router.post('/login',Login)
    router.get('/haha',verifyToken,(req,res)=>res.send('Sif Lkelb'))

export default router