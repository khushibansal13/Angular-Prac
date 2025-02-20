import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/productModel';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,NgClass,NgIf,NgFor],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  products : IProduct[] = [];
  category: any[] = [];
  productForm: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [Validators.required, Validators.minLength(10)]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    stock: new FormControl(null, [Validators.required, Validators.min(0)]),
    discountPercentage: new FormControl(0, [Validators.min(0), Validators.max(100)]),
    category: new FormControl("", Validators.required),
    tags: new FormControl(""),
  });

  ngOnInit() {
    this.loadCategories();
  }
  constructor(private api: ApiService) {}

  loadCategories() {
    this.api.getCategories().subscribe((res: any) => {
      this.category = res;
    });
  }


  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    this.addProduct();
  }

  addProduct() {
    const newProduct: IProduct = this.productForm.value;
    console.log(newProduct);
    this.api.addProduct(newProduct).subscribe((res) => {
      alert("Product added successfully");
      this.products.push(newProduct);
      this.productForm.reset();
    });
  }

}
