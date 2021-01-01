import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InformationService } from 'src/information/information.service';
import User from 'src/user/user.entity';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor (private service: InformationService, @InjectRepository(User) private infodata: Repository<User>){}

    // async validateUser(username: string , pass: string): Promise<any>{
    async validateUser(username: string): Promise<any>{
        const user = await this.service.HfindOne(username);

        // const abc= "User.username="+username;       
        //     const user = await getRepository(User)
        //         .createQueryBuilder("User")
        //         .where(abc)
        //         .getOne();


        // if (user && user.psword === pass){
        //     const {psword, ...result} = user;
        //     return result;
        // }

        return user;
        // return null;
    }


    showdata(){
        return this.infodata.find();
    }
}
