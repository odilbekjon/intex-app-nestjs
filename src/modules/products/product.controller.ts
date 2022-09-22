import { Controller, Get, HttpException, HttpStatus, Body, Post, Put, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";


@ApiTags('products')
@Controller('products')
export class ProductController {
    constructor(private readonly productService:ProductService ) {}

    // GET
    @Get()
    async AllProducts() {
        try {
            const getAll = await this.productService.GET();
            return getAll
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // POST
    @Post()
    async AddProduct(
        @Body('name') name:string,
        @Body('type') type:string,
        @Body('oldPrice') oldPrice:string,
        @Body('newPrice') newPrice:string,
        @Body('count') count:number,
        @Body('frame') frame:string,
        @Body('size') size:string,
        @Body('depth') depth:number,
        @Body('lang') lang:string,
        @Body('categoryId') categoryId:string 
    ) {

        const postProduct = await this.productService.POST(name, type, oldPrice, newPrice, count, frame, size, depth, lang, categoryId)

        return postProduct
    }

    // PUT
    @Put()
    async UpdateProduct(
        @Body('name') name:string,
        @Body('type') type:string,
        @Body('oldPrice') oldPrice:string,
        @Body('newPrice') newPrice:string,
        @Body('count') count:number,
        @Body('frame') frame:string,
        @Body('size') size:string,
        @Body('depth') depth:number,
        @Body('lang') lang:string,
        @Body('productId') productId:string 
    ) {
        const updateProduct = await this.productService.PUT(name, type, oldPrice, newPrice, count, frame, size, depth, lang, productId)

        return updateProduct
    }

    // DELETE
    @Delete()
    async DeleteProduct(
        @Body('id') id:string,
    ) {
        const deleteProduct = await this.productService.DELETE(id)

        return deleteProduct
    }
}
