import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { IProduct } from './productModel';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [NgFor, CurrencyPipe,NgClass, RouterLink,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: IProduct[] = [];
  selectedCategory: string = '';
  categories: string[] = [];

  constructor(private api : ApiService, private route : ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'] || ''; 
      this.selectedCategory = category;
      if (category) {
        this.getProductByCategory(category);
      } else {
        this.displayProducts();
      }
    });
    this.getCategoryList();
  }

  displayProducts() {
    this.api.getProducts().subscribe((res:any) => {
      this.products = res.products;
      console.log(res);

    })
  }

  getProductByCategory(category: string) {
    this.api.getProductCategory(category).subscribe((res:any) => {
      this.products = res.products;
    })
  }

  getCategoryList() {
    this.api.getCategoryList().subscribe((res: string[]) => {
      this.categories = res;
    });
  }

  getStars(rating: number): number[] {
    const roundedRating = Math.floor(rating);
    return Array(5).fill(0).map((_, index) => index + 1);
  }
}
