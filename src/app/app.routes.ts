import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { SigninComponent } from './components/signin/signin.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';

export const routes: Routes = [
  { path: 'homepage', title: 'Homepage ', component: HomepageComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'signin', title: 'Signin', component: SigninComponent },
  { path: 'dashboard', title: 'Dashboard', component: AdminDashboardComponent },
  { path: 'men', title: 'Men', component: MenComponent },
  { path: 'women', title: 'Women', component: WomenComponent },
  { path: 'lev1', title: 'Level 1 ', component: Level1Component },
  { path: 'lev2', title: 'Level 2 ', component: Level2Component },
  { path: 'lev3', title: 'Level 3 ', component: Level3Component },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];
