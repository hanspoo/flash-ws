import * as express from 'express';
import { Request, Response } from 'express';
import { dataSource as myDataSource, Todo } from '@flash-ws/dao';

const users = express.Router();
users.get('/', async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(Todo).find();
  res.json(users);
});

users.get('/:id', async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(Todo).findOneBy({
    id: req.params.id as unknown as number,
  });
  return res.send(results);
});

users.post('/', async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(Todo).create(req.body);
  const results = await myDataSource.getRepository(Todo).save(user);
  return res.send(results);
});

users.put('/:id', async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(Todo).findOneBy({
    id: req.params.id as unknown as number,
  });
  myDataSource.getRepository(Todo).merge(user, req.body);
  const results = await myDataSource.getRepository(Todo).save(user);
  return res.send(results);
});

users.delete('/:id', async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(Todo).delete(req.params.id);
  return res.send(results);
});

export { users };
