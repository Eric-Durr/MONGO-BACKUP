// API IMPORTS
// --UTILS
import express from 'express';

// --ROUTES
import user from './routes/user';

// API INITILIZATIONS
const app: express.Application = express();

app.use(express.json());

// API ROUTES

app.get('/', (_: express.Request, res: express.Response) => {
  res.status(200).send('<h1>API PARA EL EJERCICIO DEL GRUPO 103 - 19 de mayo de 2022</h1>');
});

app.use('/user', user);

// Find 404
app.use((_: express.Request, res: express.Response, next) => {
  res.status(404).send('<h1>404 NOT FOUND</h1>');
  next();
});

export default app;
