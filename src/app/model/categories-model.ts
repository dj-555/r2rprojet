import { ProductCategory } from "./product-category-model";


export class Categories {
  constructor(
    public id: string,
    public title: ProductCategory,
    public createdAt: Date
  ) {}
}
