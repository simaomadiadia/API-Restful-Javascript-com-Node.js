import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
import { Joi, Segments, celebrate } from 'celebrate';

const sessionRoute = Router();
const sessionsController = new SessionsController();

sessionRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionRoute;
