import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product-model';


const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http: HttpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${apiUrl}${id}`);
  }

  createProduct(
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'code'>
  ): Observable<Product> {
    return this.http.post<Product>(apiUrl, product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${apiUrl}${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiUrl}?category=${category}`);
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiUrl}?isAvailable=true`);
  }
}
