  import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import { TasksModule } from './tasks/tasks.module';
  import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

  @Module({
    imports: [
      ConfigModule.forRoot({ 
        envFilePath: `.env.stage.${process.env.STAGE}`,
        isGlobal: true,
      }),
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
      AuthModule,
    ],
  })
  export class AppModule {
    constructor() {
      console.log(`Current STAGE: ${process.env.STAGE}`);
      console.log(`TEST_VALUE: ${process.env.TEST_VALUE}`);
    }
  }

