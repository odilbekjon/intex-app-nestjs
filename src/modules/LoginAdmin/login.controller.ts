import { Body, Controller, Post, HttpException, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LoginService } from "./login.service";

@ApiTags('login')
@Controller('login')
export class LoginController {
    constructor(private readonly loginService:LoginService ) {}

    // POST LOGIN
    @Post('login')
    async Login(
        @Body('name') name: string,
        @Body('password') password: string,
    ) {
        const login = await this.loginService.POST(name,password)
    
    };

}
