import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'; 
import { MenuComponent } from './components/menu/menu.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'r2r';
  private noNavbarRoutes: string[] = ['/login', '/signin'];
  private currentUrl = '';

  constructor(private rout: Router) {
    this.rout.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  shouldShowNavbar(): boolean {
    return !this.noNavbarRoutes.includes(this.currentUrl);
  }
}
