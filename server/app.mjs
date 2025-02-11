import express from "express"
import router from "./router.mjs"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import servicesRoutes from "./routes/services.route.mjs"
import cors from 'cors';
dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
  }));

app.use(bodyParser.json())
app.use(router)
app.use('/',servicesRoutes)

// routes of services
app.listen(process.env.PORT,()=>{
    console.log("server live on ",process.env.PORT)
})
