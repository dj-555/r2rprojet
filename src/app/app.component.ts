import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'; 
import { MenuComponent } from './components/menu/menu.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'r2r';
  private noNavbarRoutes: string[] = ['/login', '/signin'];
  private currentUrl = '';

  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  shouldShowNavbar(): boolean {
    return !this.noNavbarRoutes.includes(this.currentUrl);
  }
}
