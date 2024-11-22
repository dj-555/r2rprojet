import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product-model';

@Injectable({
  providedIn: 'root',
})
export class panierservice {
  private cartItems = new BehaviorSubject<Product[]>([]);

  getpanierItems() {
    return this.cartItems.asObservable();
  }

  addTopanier(product: Product) {
    const currentItems = this.cartItems.value;
    const updatedItems = [...currentItems, product];
    this.cartItems.next(updatedItems);
  }

  removeFromCart(productId: string) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter((item) => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
