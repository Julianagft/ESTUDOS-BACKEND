  import { Module } from '@nestjs/common';
  import { ConfigModule, ConfigService } from '@nestjs/config';
  import { TasksModule } from './tasks/tasks.module';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { AuthModule } from './auth/auth.module';
  import { configValidationSchema } from 'config.schema';

  @Module({
    imports: [
      ConfigModule.forRoot({ 
        envFilePath: `.env.stage.${process.env.STAGE}`,
        validationSchema: configValidationSchema,
      }),
      TasksModule,
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        // useFactory é uma função que será inicializada pelo Nest.js sempre que quisermos inicializar esse módulo.
        useFactory: async (configService: ConfigService) => ({
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
        }),
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

