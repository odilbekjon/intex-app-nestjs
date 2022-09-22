import { Body, Injectable } from "@nestjs/common";
import { pg, pgAll } from "../../utils/pg";
 
@Injectable()
export class OrdersService {

    async GET() {
        const AllCategories = await pgAll(`
        SELECT zakas_id AS id, zakas_client AS client, zakas_cl_phone AS phone, zakas_size AS size, zakas_cost AS cost, zakas_address AS address, zakas_time AS time, zakas_status AS status, zakas_type AS type, zakas_img AS img FROM intex_zakas
        `,[]);
        
        return {
            message:"OK",
            data: { orders: AllCategories },
        };
    }
    

    async DELETE(
        @Body('id') id:string,
    ) {
        const deleteOrder = await pg(`
        DELETE FROM intex_zakas WHERE zakas_id = $1 RETURNING *
        `,[id])

        return {
            message:'DELETE',
            deleteOrder
        }
    }
}
