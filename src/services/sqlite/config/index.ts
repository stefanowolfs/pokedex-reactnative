import { Connection, createConnection } from 'typeorm';

import { UserEntity } from '../entity/user.entity';

export const mountConnection = async (): Promise<Connection> => {
  return createConnection({
    type: 'react-native',
    database: 'pokedex-db',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [UserEntity],
  });
};
