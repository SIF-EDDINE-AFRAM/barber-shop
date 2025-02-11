import express from "express"
import router from "./router.mjs"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import servicesRoutes from "./routes/services.route.mjs"
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(router)
// routes of services
app.use('/',servicesRoutes)
app.listen(process.env.PORT,()=>{
    console.log("server live on ",process.env.PORT)
})
