import express from "express";
import cors from 'cors'
import { adminRouter} from "./Routes/AdminRoute.js";


const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', adminRouter)

app.listen(300, () => {
    console.log("server is runing")
})