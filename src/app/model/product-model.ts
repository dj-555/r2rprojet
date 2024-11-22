import { Code } from "./code-model";
import { ProductCategory } from "./product-category-model";


export class Product {
  constructor(
    public id: string,
    public title: string,
    public desc: string | null,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean,
    public imgs: string,
    public requiredLevel: number,
    public code: Code | null,
    public codeId: string | null,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
