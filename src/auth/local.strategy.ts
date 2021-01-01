import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport";
import { AuthService } from "./auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy,"local"){
      constructor (private service: AuthService){
          super();
        //   passport.use('something', new myStrat());
      }


     async validate(username: string): Promise<any>{
          const user = await this.service.validateUser(username);

          if (!user){
              throw new UnauthorizedException();
          }
          return user;
      }
}