import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';


@Controller('auth')
export class AuthController {
    constructor (private serviveAuth: AuthService){}

    @Get('/:username')
        // getdata(@Param('userid') userid: string, @Param('psword') psword: string): Promise<any>{
        getdata(@Param('username') username: string): Promise<any>{
return this.serviveAuth.validateUser(username);
    }


    @Get()
    getData(){
        return this.serviveAuth.showdata();
    }

    

}


