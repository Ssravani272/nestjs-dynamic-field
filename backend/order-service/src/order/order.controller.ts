import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    create(@Body() body) {
        return this.orderService.create(body);
    }

    @Get()
    getOrders() {
        return this.orderService.findAll();
    }

    @Post('product')
    createProduct(@Body() body) {
        return this.orderService.createProduct(body);
    }

    @Get('products')
    getProducts() {
        return this.orderService.getProducts();
    }
}
