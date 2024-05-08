import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productsRepository:Repository <Product>
  ){

  } 
  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.save(createProductDto);
  }

  async findAll() {
    const products = await this.productsRepository.find();
    return products
  }

  async findOne(id: number) {
    return await this.productsRepository.findOneBy({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id,updateProductDto);
  }

  async remove(id: number) {
    return await this.productsRepository.delete(id);
  }
}
