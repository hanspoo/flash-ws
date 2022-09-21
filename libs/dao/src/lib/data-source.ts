import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'test',
  password: 'test',

  database: 'test',
  entities: [User],
  logging: true,
  synchronize: true,
});

export { dataSource };
