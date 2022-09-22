import { Injectable } from "@nestjs/common";
import { pg } from "../../utils/pg";
 
@Injectable()
export class LoginService {

    async POST(name, password) {
        const login = await pg(`
        SELECT * FROM intex_users WHERE users_name = $1 AND users_password = $2
        `,[name, password]);

        return {
            message:"LOGIN",
            login
        }
    }

}
