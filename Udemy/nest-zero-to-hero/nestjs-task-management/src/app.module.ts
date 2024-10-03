import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      //em partes globais usamos o forRoot, e em submodulos usamos o forFeature;
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Lobinho1!',
    database: 'task-management',
    autoLoadEntities: true,
    synchronize: true,
    }),
  ],
})
export class AppModule {}

