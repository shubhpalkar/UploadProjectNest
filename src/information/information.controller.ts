import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { InformationService } from './information.service';

@Controller('information')
export class InformationController {
    constructor (private serviceInfo: InformationService, private serviveAuth: AuthService){}

//     @Get(':userid')
//         getdata(@Param('userid') userid, @Param('psword') psword): Promise<any>{
// return this.serviveAuth.validateUser(userid, psword);
//     }

    

}


