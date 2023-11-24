import express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to mongo db')
})
.catch((err)=>{
    console.log(err)
})

const app = express();

app.use(cors())

app.listen(3000, ()=>{
    console.log("Server listening at port 3000!")
});

app.use(express.json())
app.use(cookieParser());

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})