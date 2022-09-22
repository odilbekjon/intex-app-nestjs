import { Body, Controller, Delete, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ConsultationsService } from "./consultations.service";


@ApiTags('consultations')
@Controller('consultations')

export class ConsultationsController {
    constructor(private readonly consultationService:ConsultationsService ) {}

    @Get()
    async GetAll() {
        try {
            const getAll = await this.consultationService.GET();
            return getAll
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete()
    async DeleteCategory(
        @Body('id') id:string,
    ) {
        try {
            const deleteCategory = this.consultationService.DELETE(id)
        
            return deleteCategory
            
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
