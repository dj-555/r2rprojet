import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../model/product-category-model';
import { Product } from '../model/product-model';

@Pipe({
  name: 'men',
  standalone: true,
})
export class MenPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    const menCategories = [
      ProductCategory.TSHIRTMEN,
      ProductCategory.HOODIEMEN,
      ProductCategory.SHIRTMEN,
    ];
    return products.filter((product) =>
      menCategories.includes(product.category)
    );
  }
}
