import * as express from 'express';
import { Request, Response } from 'express';
import { dataSource as myDataSource } from '@flash-ws/dao';
import { Message } from '@flash-ws/api-interfaces';
import { users } from './routers/users';

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

// create and setup express app
const app = express();
app.use(express.json());

const greeting: Message = { message: 'Welcome to the api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

// register routes
app.get('/', async function (req: Request, res: Response) {
  res.json({ name: 'Hello' });
});

app.use('/api/users', users);
export { app };
