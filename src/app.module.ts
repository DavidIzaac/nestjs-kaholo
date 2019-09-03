import { Module } from '@nestjs/common';
import {DashboardModule} from './dashboard/dashboard.module';
import {typeOrmConfig} from './config/typeorm.config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DashboardModule
  ],
})
export class AppModule {}
