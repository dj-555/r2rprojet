import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Client } from '../../model/client-model';
import { Level } from '../../model/level-model';
import { Product } from '../../model/product-model';
import { ClientService } from '../../service/client-service.service';
import { LevelService } from '../../service/level-service.service';
import { ProductService } from '../../service/product-service.service';
import { panierservice } from '../../service/panier-service.service';


@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.css',
})
export class Level2Component implements OnInit {
  private readonly productService: ProductService = inject(ProductService);
  private readonly levelService: LevelService = inject(LevelService);
  private readonly clientService: ClientService = inject(ClientService);
  private readonly panierService: panierservice = inject(panierservice);

  products: Product[] = [];
  levels: Level[] = [];
  clients: Client[] = [];
  currentLevelIndex: number = 0;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.levelService.getLevels().subscribe((data) => {
      this.levels = data;
    });
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  addToPanier(product: Product): void {
    this.panierService.addTopanier(product);
  }
}
