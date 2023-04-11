import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as moment from 'moment';
import { UserModule } from '../users/users.module';
import { ConfigService } from '@nestjs/config';
import { TokenService } from './token.service';

const MomentProvider = {
  provide: 'MomentWrapper',
  useValue: moment,
};

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  providers: [ConfigService, TokenService, MomentProvider],
  exports: [TokenService],
})
export class TokenModule {}
