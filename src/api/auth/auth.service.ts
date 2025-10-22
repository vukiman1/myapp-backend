import { Injectable } from '@nestjs/common';
// import { User } from '../user/entities/user.entity';
// import { SetCookieRFToken } from '@app/helpers/setCookieRFToken';
import { Response } from 'express';
@Injectable()
export class AuthService {
  findAll() {
    return {
      message: 'Auth me',
    };
  }
  // login(user: User, response: Response) {
  //   const { id } = user;
  //   const payload = { id };

  // Generate accessToken
  // const accessToken = this.jwtService.signJwt(payload);
  // const refreshToken = this.jwtService.signJwt(payload, true);

  //Cache token
  // this.redisService.setRefreshToken(id, refreshToken);
  // this.redisService.setAccessToken(id, accessToken);

  //Encrypt cookie
  // const encryptId = this.cryptoService.encryptData(id);
  // SetCookieRFToken(response, encryptId);
  // const result = { user, accessToken };
  // return result;
  // }
}
