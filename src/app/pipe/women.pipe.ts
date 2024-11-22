import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product-model';
import { ProductCategory } from '../model/product-category-model';

@Pipe({
  name: 'women',
  standalone: true,
})
export class WomenPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    const womenCategories = [
      ProductCategory.TSHIRTWOMEN,
      ProductCategory.HOODIEWOMEN,
      ProductCategory.SHIRTWOMEN,
    ];
    return products.filter((product) =>
      womenCategories.includes(product.category)
    );
  }
}
