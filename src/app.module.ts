import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { CategoryModule } from './modules/category/category.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ConsultationsModule } from './modules/consultations/consultations.module';
import { CiteModule } from './modules/cite/cite.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    OrdersModule,
    ConsultationsModule,
    CiteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
