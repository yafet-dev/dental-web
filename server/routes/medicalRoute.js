import express from 'express'
import { addRecord, getRecord } from '../controllers/medicalController.js';

const medicalRoute = express.Router();

medicalRoute.post('/:id', addRecord);
medicalRoute.get('/:id', getRecord);

export default medicalRoute;