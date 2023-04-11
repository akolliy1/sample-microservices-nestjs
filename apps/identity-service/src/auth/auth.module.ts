import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../users/users.module';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { LocalStrategy } from './authStrategies/local.strategy';
import { JwtStrategy } from './authStrategies/jwt.strategy';
import { TokenModule } from '../token/token.module';
import { AuthController } from './auth.controller';
import { MomentService } from '../utils/moment.service';

const jwtOpts = {
  secret: process.env.JWT_SECRET,
};

@Module({
  imports: [
    UserModule,
    PassportModule,
    TokenModule,
    JwtModule.register(jwtOpts),
  ],
  providers: [
    ConfigService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    MomentService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
