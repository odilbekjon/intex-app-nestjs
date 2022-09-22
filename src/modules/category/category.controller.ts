import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";


@ApiTags('categories')
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService ) {}

    // GET
    @Get()
    async GetAll() {
        try {
            const getAll = await this.categoryService.GET();
            return getAll
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // POST
    @Post()
    async AddCategory(
        @Body('nameRu') nameRu: string,
        @Body('nameUz') nameUz: string,
    ) {
        const post = await this.categoryService.POST(nameRu, nameUz);

        return post
    };

    // UPDATE
    @Put()
    UpdateCategory(
        @Body('nameRu') nameRu: string,
        @Body('nameUz') nameUz:string,
        @Body('catId') catId:string,
    ) {
        const update = this.categoryService.PUT(nameRu,nameUz,catId)

        return update
    }

    // DELETE
    @Delete()
    DeleteCategory(
        @Body('id') id:string,
    ) {
       const deleteCategory = this.categoryService.DELETE(id)

       return deleteCategory
    }
}
