import express from 'express'
import userRoutes from './Routes/user.routes.js'
import logger from './Middlewares/logger.middleware.js'
const app=express()

app.use(express.json())
app.use(logger)

app.use('/users',userRoutes)
export default app