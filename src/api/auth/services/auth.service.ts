import { Injectable } from '@nestjs/common';
// import { User } from '../user/entities/user.entity';
// import { SetCookieRFToken } from '@app/helpers/setCookieRFToken';
import { Response } from 'express';
import { RegisterDto } from '../dto/register.dto';
import { CryptoService } from '@app/crypto';
import { UserEntity } from 'src/api/user/entities/user.entity';
import { JwtService } from '@app/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}
  findAll() {
    return {
      message: 'Auth me',
    };
  }
  async login(user: UserEntity, _response: Response) {
    const { id } = user;
    const payload = { id };
    // // Generate accessToken
    const accessToken = await this.jwtService.signJwt(payload);
    const refreshToken = await this.jwtService.signJwt(payload, true);

    // // Cache token
    // this.redisService.setRefreshToken(id, refreshToken);
    // this.redisService.setAccessToken(id, accessToken);

    // // Encrypt cookie
    // const encryptId = this.cryptoService.encryptData(id);
    // SetCookieRFToken(response, encryptId);
    const result = { user, accessToken, refreshToken };
    return result;
  }

  async register(register: RegisterDto) {
    return {
      message: 'Register successful',
      data: register,
    };
  }
}
