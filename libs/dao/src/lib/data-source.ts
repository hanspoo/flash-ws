import { DataSource } from 'typeorm';
import { Todo } from './entity/todo.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'flash',
  password: 'flash',

  database: 'flash',
  entities: [Todo],
  logging: true,
  synchronize: true,
});

export { dataSource };
