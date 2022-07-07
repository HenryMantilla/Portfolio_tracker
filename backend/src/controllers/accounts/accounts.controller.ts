import { Controller, Get} from '@nestjs/common';

@Controller('accounts')
export class AccountsController {

    @Get('/Login')
    getLogin(){
        return 'Login Page for users'
    }

    @Get('/Signup')
    getSignUp(){
        return 'SignUp Page'
    }
}
