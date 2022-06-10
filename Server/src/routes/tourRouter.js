import express from 'express';
import { createTour, getTours } from '../controller';
const tourRouter = express.Router();

tourRouter.route('/').get(getTours).post(createTour);

export default tourRouter;
