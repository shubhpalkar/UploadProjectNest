import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from 'src/user/user.entity';
import { getRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';

// export type User = any;

@Injectable()
export class InformationService {
    
    
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    //   async findOne(username: string): Promise<User | undefined> {
      async HfindOne(usernamex: string): Promise<any> {
     //   const abc= "User.userid="+username; 

        return  this.userRepo.findOne(
          { where:
            { username: usernamex }
        });
        
              
        //     const timber = await getRepository(User)
        //         .createQueryBuilder("User")
        //         .where(abc)
        //         .getOne();


        //     console.log(timber);
        //     return timber;
}
}
