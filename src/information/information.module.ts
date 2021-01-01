import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { InformationService } from './information.service';

@Module({
    imports: [UserService,TypeOrmModule.forFeature([User])],
    providers: [InformationService],
    exports: [InformationService],
})
export class InformationModule {
    
}
