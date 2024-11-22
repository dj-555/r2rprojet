import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isLoading = false;
  errorMessage = '';
  loged = false;

  private readonly router: Router = inject(Router);
  private readonly authService: AuthService = inject(AuthService);

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          this.isLoading = false;
          console.log('Login successful:', response);
          this.router.navigate(['/homepage']);
          this.loged = true;
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Invalid email or password. Please try again.';
          console.error('Login failed:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }

  goBack() {
    this.router.navigate(['/homepage']);
  }
}
