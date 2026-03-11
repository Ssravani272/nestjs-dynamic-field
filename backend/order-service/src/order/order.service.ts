import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
}

export interface Order {
    id: string;
    product: Product;
    quantity: number;
}

@Injectable()
export class OrderService {
    private orders: Order[] = [];

    constructor(
        @Inject('PRODUCT_SERVICE') private productClient: ClientProxy
    ) { }

    async create(order: CreateOrderDto) {

        const product = await firstValueFrom(
            this.productClient.send('get_product', { id: order.productId })
        );

        if (!product) {
            throw new Error('Product not found');
        }

        const newOrder: Order = {
            id: Date.now().toString(),
            product,
            quantity: order.quantity
        };

        this.orders.push(newOrder);

        return newOrder;
    }

    findAll(): Order[] {
        return this.orders;
    }

    async createProduct(product) {
        return await firstValueFrom(
            this.productClient.send('create_product', product)
        );
    }

    async getProducts() {
        return await firstValueFrom(
            this.productClient.send('get_products', {})
        );
    }
}
