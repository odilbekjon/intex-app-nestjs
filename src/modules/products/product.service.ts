import { Body, Injectable } from "@nestjs/common";
import { pg, pgAll } from "../../utils/pg";
 
@Injectable()
export class ProductService {

    async GET() {
        const findAllProducts = await pgAll(`SELECT product_id AS id, product_name AS name , product_type AS type , 
        product_price_old AS priceOld , product_price_new AS priceNew , 
        product_count AS count, product_frame AS frame , product_size AS size , 
        product_depth AS depth, product_date AS date, product_lang AS lang , product_image AS img , 
        category_id AS categoryId 
        FROM intex_products;`,[]);
        
        return {
            message:"OK",
            data: { products: findAllProducts },
        };
    }

    async POST(name, type, oldPrice, newPrice, count, frame, size, depth, lang, categoryId) {

        const addProduct = await pg(`
            INSERT INTO intex_products(product_name, product_type, product_price_old, product_price_new, product_count, product_frame, product_size, product_depth, product_lang, category_id) 
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *
        `,[ name, type, oldPrice, newPrice, count, frame, size, depth, lang, categoryId ])
        
        return {
            message:'POST',
            addProduct
        }
    }

    async PUT(name, type, oldPrice, newPrice, count, frame, size, depth, lang, productId) {
        const updateProduct = await pg(`
            UPDATE intex_products SET product_name = $1, product_type = $2, product_price_old = $3, product_price_new = $4, product_count = $5,product_frame = $6, product_size = $7, product_depth = $8, product_lang = $9
            WHERE product_id = $10 RETURNING *
        `,[name, type, oldPrice, newPrice, count, frame, size, depth, lang, productId])

        return {
            message:'UPDATE',
            updateProduct
        }
    }

    async DELETE(id) {
        const deleteProduct = await pg(`
            DELETE FROM intex_products WHERE product_id = $1 RETURNING *
        `,[id])

        return {
            message:'DELETE',
            deleteProduct
        }
    }
}
