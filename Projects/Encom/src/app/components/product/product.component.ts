import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { IProduct } from './productModel';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [NgFor, CurrencyPipe,NgClass, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private api : ApiService) {

  }
  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.api.getProducts().subscribe((res:any) => {
      this.products = res.products;
      console.log(res);

    })
  }

  getStars(rating: number): number[] {
    const roundedRating = Math.floor(rating);
    return Array(5).fill(0).map((_, index) => index + 1);
  }
}
