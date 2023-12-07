import { DataSource } from 'typeorm';
import { User } from './models/user.model';

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres-container', // should be the same as the name of container with db
  port: 5432,
  username: 'postgres',
  password: 'test',
  database: 'postgres',
  entities: [User],
  logging: true,
  synchronize: true,
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
