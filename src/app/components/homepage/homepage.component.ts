import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/product-service.service';
import { LevelService } from '../../service/level-service.service';
import { ClientService } from '../../service/client-service.service';
import { Product } from '../../model/product-model';
import { Level } from '../../model/level-model';
import { Client } from '../../model/client-model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { panierservice } from '../../service/panier-service.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
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
