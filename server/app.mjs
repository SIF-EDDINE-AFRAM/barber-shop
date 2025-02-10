import express from "express"
import router from "./router.mjs"
import dotenv from 'dotenv'
import bodyParser from "body-parser"
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(router)
app.listen(process.env.PORT,()=>{
    console.log("server live on ",process.env.PORT)
})
