import express from 'express'
import homeRoutes from "./routes/home.routes.js"

const app = express()
const PORT = 3000

// home routes 
app.use("/", homeRoutes)

app.listen(PORT, () => console.log(`Server Started at http://localhost:${3000}`))