import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import customersRoute from './routes/customersRoute.js'
import medicalRoute from "./routes/medicalRoute.js";
import paymentsRoute from "./routes/paymentsRoute.js";
import authRoute from './routes/authRoute.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL, credentials:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("API is running...");
});

//Routes
app.use('/customers', customersRoute);
app.use('/payments', paymentsRoute);
app.use('/medical', medicalRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try{
        await mongoose.connect(process.env.DB_CONNECTION_URL);
        console.log("Connected to database successfully");
    }
    catch(err){
        console.log(err);
    }
});