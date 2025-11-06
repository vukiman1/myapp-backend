import { StrategyKey } from '@app/constants';
import { JwtPayload } from '@app/jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { config } from 'config/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/api/user/user.service';

@Injectable()
export class JwtUserStrategy extends PassportStrategy(
  Strategy,
  StrategyKey.JWT.USER,
) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwt.secret,
    });
  }

  async validate(payload: JwtPayload) {
    const { id } = payload;
    // const where = { id };
    // await this.redisService.getAccessToken(id);
    // return this.adminService.getOneOrFail(where);
    return {
      id,
    };
  }
}
