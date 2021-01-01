import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { InformationService } from './information/information.service';
// import { InformationController } from './information/information.controller';
// import { InformationModule } from './information/information.module';
// import { AuthModule } from './auth/auth.module';
// import { AuthService } from './auth/auth.service';
// import { AuthController } from './auth/auth.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { InformationModule } from './information/information.module';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), MessageModule, MulterModule.register({
    dest: './files'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
