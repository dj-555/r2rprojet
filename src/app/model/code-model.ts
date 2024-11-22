import { Product } from "./product-model";



export class Code {
  constructor(
    public id: string,
    public name: string,
    public isUsed: boolean,
    public product: Product | null
  ) {}
}
