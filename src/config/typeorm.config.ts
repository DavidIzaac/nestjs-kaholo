import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'local-kaholo'
}