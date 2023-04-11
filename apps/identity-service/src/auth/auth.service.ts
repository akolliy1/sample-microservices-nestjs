import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { TokenService } from '../token/token.service';
import { MomentService } from '../utils/moment.service';
// import moment from 'moment';

@Injectable()
export class AuthService {
  @Inject()
  private readonly tokenService: TokenService;

  @Inject()
  private readonly configService: ConfigService;

  @Inject()
  private readonly momentService: MomentService;

  @Inject()
  private readonly usersService: UsersService;

  async validateUser(credential: string) {
    const registeredUser = await this.usersService.fetchByCredential(
      credential,
    );
    if (registeredUser) return registeredUser;
    return null;
  }

  async login(user: any, rememberMe: string | boolean) {
    // Access Token Expiration settings
    const accessExpDays = this.configService.get('jwt.accessExpirationMinutes');
    // eslint-disable-next-line prettier/prettier
    const accessTokenExp = this.momentService.moment().add(accessExpDays, 'minutes');
    const accessTokenYearExp = this.momentService.moment().add(1, 'year');
    const expires = rememberMe ? accessTokenYearExp : accessTokenExp;
    const accessToken = await this.tokenService.createToken(user, expires);

    // Refresh Token Expiration settings
    const refreshExpDays = this.configService.get('jwt.refreshExpirationDays');
    // eslint-disable-next-line prettier/prettier
    const refreshTokenExp = this.momentService.moment().add(refreshExpDays, 'days');
    // eslint-disable-next-line prettier/prettier
    const refreshToken = await this.tokenService.createToken(user, refreshTokenExp);

    return {
      access: {
        token: accessToken,
        expires,
      },
      refresh: {
        token: refreshToken,
        expires: refreshTokenExp.toDate(),
      },
    };
  }
}
