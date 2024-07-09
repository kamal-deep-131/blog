import express from 'express'
import homeRoutes from "./routes/home.routes.js"
import blogRoutes from './routes/blog.routes.js'

const app = express()
const PORT = 3000

// home routes 
app.use("/", homeRoutes)

// blog routes 
app.use('/api/v1/blogs/', blogRoutes)

app.listen(PORT, () => console.log(`Server Started at http://localhost:${3000}`))