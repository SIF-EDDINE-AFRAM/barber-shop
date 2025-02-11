import express from "express"
import router from "./router.mjs"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import cors from 'cors';

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
  }));

app.use(bodyParser.json())
app.use(router)

app.listen(process.env.PORT || 5000,()=>{
    console.log("server live on ",process.env.PORT)
})
