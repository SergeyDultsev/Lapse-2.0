import { Module } from '@nestjs/common';
import { AuthService } from '@resources/auth/auth.service.js';
import { AuthController } from '@resources/auth/auth.controller.js';
import { UserService } from '@resources//user/user.service.js';
import { JwtStrategy } from '@resources/auth/strategies/jwt.strategy.js';
import { JwtRefreshStrategy } from '@resources/auth/strategies/jwt-refresh-strategy.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@resources/user/entites/user.entity.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtModuleOptions => {
        const jwtSecret = configService.get<string>('jwt.secret');
        const jwtExpiresIn = configService.get<number>('jwt.expiresIn');

        if (!jwtSecret || !jwtExpiresIn) {
          throw new Error('JWT is not defined');
        }

        return {
          secret: jwtSecret,
          signOptions: {
            expiresIn: jwtExpiresIn,
          },
        };
      },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy, JwtRefreshStrategy],
})
export class AuthModule {}
