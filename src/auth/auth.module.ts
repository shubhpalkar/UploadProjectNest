import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { InformationModule } from 'src/information/information.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { localStrategy } from './local.strategy';

@Module({
  imports: [InformationModule, PassportModule],
  providers: [AuthService, localStrategy, UserService],
  exports: [AuthService]
})
export class AuthModule {}
