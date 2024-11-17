import { Component } from '@angular/core';
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
  
  signinForm: FormGroup;

  constructor(private router: Router) {
    this.signinForm = new FormGroup({
      
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),]),
        
      name: new FormControl(''),
      firstname: new FormControl(''),
      address: new FormControl(''),
      validepassword:new FormControl(''),
    });

    
  
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log(
        
        this.signinForm.value
      );
     
      this.router.navigate(['/homepage']);
    } else {
      console.log('Form is invalid');
    }
  }

  goBack() {
    this.router.navigate(['/homepage']);
  }

  

  
}
