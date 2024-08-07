import express from 'express'
import homeRoutes from "./routes/home.routes.js"
import blogRoutes from './routes/blog.routes.js'
import userRoutes from './routes/user.routes.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const PORT = 3000

dotenv.config()
app.use(express.json({ limit: '20kb' }))
app.use(cors({
    origin: '*'
}))

    // mongodb connection 
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MNGODB_URL}${process.env.DATABASE}`)
            console.log("Database connected")
        } catch (error) {
            console.log("Errror in DB connection", error)
        }
    })()

// home routes 
app.use("/", homeRoutes)

//user routes

app.use('/api/v1/user/', userRoutes)

// blog routes 
app.use('/api/v1/blogs/', blogRoutes)

app.listen(PORT, () => console.log(`Server Started at http://localhost:${3000}`))