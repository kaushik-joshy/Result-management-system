import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { apiError } from './utils/apiError.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(cookieParser()) 

app.use((req, res, next) =>{
    next(new apiError(404, 'Route not found'));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal server Error',
        errors: err.errors || [],
    });
});

export {app}