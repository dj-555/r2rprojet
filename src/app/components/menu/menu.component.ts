import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, AccountComponent,RouterLinkActive,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isAccountOpen = false;

  toggleMenu() {
    this.isAccountOpen = !this.isAccountOpen;
  }

  closeAccount() {
    this.isAccountOpen = false;
  }
}
