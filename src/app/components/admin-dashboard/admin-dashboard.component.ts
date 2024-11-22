import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProductService } from '../../service/product-service.service';
import { Product } from '../../model/product-model';
import { ProductCategory } from '../../model/product-category-model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  private productService = inject(ProductService);
  private fb = inject(FormBuilder);

  productForm: FormGroup;
  categories = Object.values(ProductCategory);
  formSubmitted = false;

  constructor() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      desc: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      isAvailable: [true],
      imgs: ['', Validators.required],
      requiredLevel: [1, [Validators.required, Validators.min(1),Validators.max(3)]],
      codeId: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.productForm.valid) {
      const newProduct: Omit<
        Product,
        'id' | 'createdAt' | 'updatedAt' | 'code'
      > = {
        title: this.productForm.value.title!,
        desc: this.productForm.value.desc ?? null,
        price: this.productForm.value.price!,
        category: this.productForm.value.category as ProductCategory,
        isAvailable: this.productForm.value.isAvailable!,
        imgs: this.productForm.value.imgs!,
        requiredLevel: this.productForm.value.requiredLevel!,
        codeId: this.productForm.value.codeId ?? null,
      };

      this.productService.createProduct(newProduct).subscribe({
        next: (createdProduct) => {
          console.log('Product created successfully:', createdProduct);
          this.productForm.reset();
          this.formSubmitted = false;
        },
        error: (error) => {
          console.error('Error creating product:', error);
        },
      });
    }
  }
}
