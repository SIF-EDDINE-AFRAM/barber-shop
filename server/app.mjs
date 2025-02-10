import express from "express"
import router from "./router.mjs"

const app = express()

app.listen(1999, ()=>{
    console.log("server live on ", 1999)
})

app.use(router)