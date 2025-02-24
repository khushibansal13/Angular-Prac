import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/productModel';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgClass, NgFor, NgIf, Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgClass, NgIf, DatePipe, NgFor],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
    isToggle: any;
    productDetail!: IProduct

    constructor(private api: ApiService, private activadedRoute: ActivatedRoute, private router: Router, private location: Location) {

    }

    ngOnInit(): void {
      let productid = this.activadedRoute.snapshot.paramMap.get('productid');
      // console.log(productid);
      productid && this.api.getProductById(productid).subscribe((res: IProduct) => {
        this.productDetail = res;
        console.log(res);
      })
    }

    goBack() {
      this.location.back(); 
    }


}
