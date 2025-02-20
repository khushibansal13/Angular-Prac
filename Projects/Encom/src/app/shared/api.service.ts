import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from '../components/product/productModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct>("https://dummyjson.com/products")
  }

  getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>("https://dummyjson.com/products/" + productId);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`https://dummyjson.com/products/${productId}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>("https://dummyjson.com/products/add",product);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>("https://dummyjson.com/products/categories");
  }

  updateProduct(productId: number, product:any) {
    return this.http.put("https://dummyjson.com/products/" + productId, {
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      stock: product.stock,
      rating  : product.rating,
      images: product.images,
      thumbnail: product.thumbnail,
      category: product.category,
      brand : product.brand
    });
  }

  // updateProduct(productId: number, product:any) {
  //   return this.http.put("https://dummyjson.com/products/" + productId, product);
  // }

  login(loginObj: any) {
    return this.http.post<any>("https://dummyjson.com/auth/login", loginObj);
  }

  refreshToken(refreshToken: string) {
    return this.http.post<any>("https://dummyjson.com/auth/refresh", { refreshToken });
  }



}
