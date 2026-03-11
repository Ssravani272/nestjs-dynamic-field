import { Injectable } from '@nestjs/common';
import { CreateProductDto, ProductDto } from './dto/create-product.dto';

// interface ProductDto {
//     id: string;
//     name: string;
//     price: number;
//     stock: number;
// }

@Injectable()
export class ProductService {
    private products: ProductDto[] = [];

    create(product: CreateProductDto): ProductDto {
        const newProduct = {
            id: Date.now(),
            ...product,
        };

        this.products.push(newProduct);
        return newProduct;
    }

    findAll(): ProductDto[] {
        return this.products;
    }

    findOne(id: number): ProductDto | undefined {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            return undefined;
        }
        return product;
    }

    update(id: number, data: Partial<CreateProductDto>): CreateProductDto | undefined {
        const product = this.findOne(id);
        if (!product) {
            return undefined;
        }
        Object.assign(product, data);
        return product;
    }

    remove(id: number): { deleted: boolean } {
        this.products = this.products.filter(p => p.id !== id);
        return { deleted: true };
    }
}
