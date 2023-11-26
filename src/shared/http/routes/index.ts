import productsRouter from '@modules/products/routes/products.routes';
import sessionRoute from '@modules/users/routes/sessions.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRoute);

/*routes.get('/', (request, response) => {
  return response.json({ messagem: 'Ola mundo' });
});
*/
export default routes;
