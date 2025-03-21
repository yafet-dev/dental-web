import express from 'express';
import { login, register, logout } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/login', login);
userRoute.post('/register', register);
userRoute.get('/logout', logout);

export default userRoute;