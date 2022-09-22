import { Body, Controller, Delete, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";


@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService:OrdersService ) {}

    @Get()
    async AllCategories() {
        try {
            const getCategory = await this.ordersService.GET();
            return getCategory
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete()
    async DELETE(
        @Body('id') id:string,
    ) {
        const deleteOrder = await this.ordersService.DELETE(id)
        
        return deleteOrder
    }
}
