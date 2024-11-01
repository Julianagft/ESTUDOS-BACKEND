  import { Module } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { AuthController } from './auth.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { User } from './user.entity';
  import { UsersRepository } from './user.repository';
  import { PassportModule } from '@nestjs/passport';
  import { JwtModule } from '@nestjs/jwt';
  import { JwtStrategy } from './jwt.strategy';

  @Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secret: 'topSecret51',
        signOptions: {
          expiresIn: 3600, //define o tempo de expiração do token;
        },
      }),
      TypeOrmModule.forFeature([User]),
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersRepository, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
  })
  export class AuthModule {}  
