import { Controller, Get} from '@nestjs/common';

@Controller('accounts')
export class AccountsController {

    @Get('/Login')
    getLogin(){
        return 'Login Page'
    }

    @Get('/Signup')
    getSignUp(){
        return 'SignUp Page'
    }
}
