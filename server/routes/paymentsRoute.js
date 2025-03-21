import express from 'express'
import { addPayment, getPayment} from '../controllers/paymentController.js';

const paymentsRoute = express.Router();

paymentsRoute.post('/:id', addPayment);
paymentsRoute.get('/:id', getPayment);

export default paymentsRoute;