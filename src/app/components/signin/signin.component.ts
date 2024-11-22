import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.minLength(8),Validators.maxLength(8)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    
    ]),
    name: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    address: new FormControl(''),
    validepassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  loged = false;
  passwordsMismatch: boolean | undefined;

  private readonly router: Router = inject(Router);

  onSubmit(): void {
    const password = this.signinForm.get('password')?.value;
    const validepassword = this.signinForm.get('validepassword')?.value;

    if (password !== validepassword) {
      this.passwordsMismatch = true;
      console.error('Passwords do not match');
      
      return;

    }

    this.passwordsMismatch = false;

    if (this.signinForm.valid) {
      console.log('Sign-up data:', this.signinForm.value);
      this.router.navigate(['/homepage']);
      this.loged = true;
    } else {
      alert('Form is invalid');
    }
  }

  goBack(): void {
    this.router.navigate(['/homepage']);
  }
}
