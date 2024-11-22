import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../model/product-model';
import { panierservice } from '../../service/panier-service.service';


@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  cartItems: Product[] = [];
  private readonly panierService: panierservice = inject(panierservice);

  ngOnInit() {
    this.panierService.getpanierItems().subscribe((items: Product[]) => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: string) {
    this.panierService.removeFromCart(productId);
  }

  clearCart() {
    this.panierService.clearCart();
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}


