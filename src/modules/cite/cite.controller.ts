import { Body, Controller, Get, HttpException, HttpStatus, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CiteService } from "./cite.service";

@ApiTags('cite')
@Controller('cite')
export class CiteController {
    constructor(private readonly citeService:CiteService ) {}

    // GET
    @Get()
    async GetAll() {
        try {
            const getCite = await this.citeService.GET();
            return getCite
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // PUT
    @Put()
    async UpdateCite(
        @Body('phone') phone:string,
        @Body('addressRu') addressRu:string,
        @Body('addressUz') addressUz:string,
        @Body('timeRu') timeRu:string,
        @Body('timeUz') timeUz: string,
        @Body('telegram') telegram:string,
        @Body('instagram') instagram:string,
        @Body('citeId') citeId:number
    ) {
        const putCite = await this.citeService.PUT(phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId)

        return putCite
      
    }
    


}
