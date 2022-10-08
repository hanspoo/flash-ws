import { DataSource } from 'typeorm';
import { Todo } from './entity/todo.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'test',
  password: 'test',

  database: 'test',
  entities: [Todo],
  logging: true,
  synchronize: true,
});

export { dataSource };
