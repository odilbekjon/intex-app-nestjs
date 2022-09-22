import { Module, NestModule } from "@nestjs/common";
import { CiteController } from "./cite.controller";
import { CiteService } from "./cite.service";


@Module({
    controllers:[CiteController],
    providers:[CiteService],
})

export class CiteModule {}