import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateTokenDTO } from './dto/create.dto';

@Injectable()
export class TokenService {
  // private readonly jwtService: JwtService;

  @Inject()
  private readonly configService: ConfigService;

  @Inject('MomentWrapper') private momentWrapper: moment.Moment;
  // constructor() {}
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async createToken(
    user: CreateTokenDTO,
    expires = this.momentWrapper,
    secret = this.configService.get('jwt.secret'),
  ) {
    const userCompressed = {
      id: user._id,
      type: user.type,
      email: user.email?.address,
      phone: user.phone?.address,
    };

    const payload = {
      sub: user._id,
      user: userCompressed,
      iat: this.momentWrapper.utc().unix(),
      exp: expires.unix(),
    };
    return this.jwtService.sign(payload, { secret: secret });
  }
}
