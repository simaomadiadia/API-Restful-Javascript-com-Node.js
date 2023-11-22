import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
// Criacao do middlew
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        statu: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      statu: 'error',
      message: 'internal server error',
    });
  },
);
app.listen(1024, () => {
  console.log('Servidor rodando na porta 1024');
});
