import { Injectable } from "@nestjs/common";
import { pg, pgAll } from "../../utils/pg";
 
@Injectable()
export class CategoryService {
    constructor() {}

    async GET() {
        const findAllCategories = await pgAll(`
            SELECT category_id AS id , 
            category_name_uz AS nameUz ,
            category_name_ru AS nameRu 
            FROM intex_category
        `,[]);
        
        return {
            message:"OK",
            data: { categories: findAllCategories },
        };
    }

    async POST(nameRu, nameUz) {
        const findCategory = await pg(`
            INSERT INTO intex_category(category_name_ru, category_name_uz) VALUES($1,$2) RETURNING *
        `,[nameRu,nameUz]);

        return {
            message:"POST",
            findCategory
        }
    }

    async  PUT(nameRu, nameUz,catId) {
        const UpdateCategory = await pg(`
        UPDATE intex_category set category_name_ru = $1, category_name_uz = $2 where category_id = $3 RETURNING *
        `,[nameRu, nameUz, catId]);


        return {
            message:"PUT",
            UpdateCategory
        }
    }

    async DELETE(id){
        const DeleteCategory = await pg(`DELETE FROM intex_category WHERE category_id = $1 RETURNING *`,[id])

        return {
            message:"DELETE",
            DeleteCategory
        }
    }
}
