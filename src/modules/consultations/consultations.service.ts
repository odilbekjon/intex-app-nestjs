import { Injectable } from "@nestjs/common";
import { pg, pgAll } from "../../utils/pg";
 
@Injectable()
export class ConsultationsService {
    constructor() { }

    async GET() {
        const AllCategories = await pgAll(`
        SELECT consultation_id AS id, consultation_client AS client, consultation_cl_phone AS phone,
        consultation_time AS time, consultation_status AS status FROM intex_consultations
        `,[]);
        
        return {
            message:"OK",
            data: { consultations: AllCategories },
        };
    }

    async DELETE(id) {
        const deleteCategory = await pg(`
        DELETE FROM intex_consultations WHERE consultation_id = $1 RETURNING *
        `,[id])

        return {
            message:'DELETE',
            deleteCategory
        }
    }
}
