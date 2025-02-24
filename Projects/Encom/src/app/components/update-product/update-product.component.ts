import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../product/productModel';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  @Input() product: any = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    discountPercentage: 0,
    rating: 0,
    images: []
  };
  @Output() update = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

 constructor(private api: ApiService) {}

 updateProduct() {
  if (this.product && this.product.id) {
    this.api.updateProduct(this.product.id, this.product).subscribe({
      next: (res: any) => {
        console.log('API Response received:', res);
        this.update.emit(res);
      },
      error: (err) => {
        console.error('Error updating product:', err);
      },
      complete: () => {
        console.log('Update operation completed');
      }
    });
  } else {
    console.error('Invalid product data:', this.product);
  }
}
}

