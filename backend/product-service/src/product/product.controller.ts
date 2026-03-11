import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @MessagePattern('create_product')
    create(data: any) {
        return this.productService.create(data);
    }

    @MessagePattern('get_products')
    findAll() {
        return this.productService.findAll();
    }

    @MessagePattern('get_product')
    findOne(data: any) {
        return this.productService.findOne(data.id);
    }
}
