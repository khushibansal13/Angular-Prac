import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, NgClass, NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()

  getImage(product: IProduct) {
    return  '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getDiscountedPrice(product: IProduct) {

  }

}
 