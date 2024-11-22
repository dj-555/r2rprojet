import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product-service.service';
import { LevelService } from '../../service/level-service.service';
import { ClientService } from '../../service/client-service.service';
import { Product } from '../../model/product-model';
import { Level } from '../../model/level-model';
import { Client } from '../../model/client-model';
import { MenPipe } from '../../pipe/men.pipe';
import { panierservice } from '../../service/panier-service.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule, MenPipe],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css',
})
export class MenComponent implements OnInit {
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
