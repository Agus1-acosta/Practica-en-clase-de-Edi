import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { ProductsService } from './products.service';

@Controller('api/edi')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post()
    postProducts(){
        return this.productsService.postProducts();
    }
}