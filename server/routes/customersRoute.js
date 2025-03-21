import express from 'express'
import {register, getAll, getCustomer, update, deleteCustomer} from '../controllers/customerController.js';

const customersRoute = express.Router();

customersRoute.post('/', register);
customersRoute.get('/', getAll);
customersRoute.get('/:id', getCustomer);
customersRoute.put('/:id', update);
customersRoute.delete('/:id', deleteCustomer);

export default customersRoute;
