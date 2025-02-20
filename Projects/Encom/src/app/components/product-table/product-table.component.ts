import { Component } from '@angular/core';
import { IProduct } from '../product/productModel';
import { ApiService } from '../../shared/api.service';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-product-table',
  imports: [NgFor, CurrencyPipe,NgClass,RouterLink,UpdateProductComponent,NgIf],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  products : IProduct[] = [];
  selectedProduct: any | null = null;

  constructor(private api : ApiService) {
    this.api.getProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  deleteProduct(productId: number) {
    const productToDelete = this.products.find(product => product.id === productId);
    if (productToDelete) {
      const confirmDelete = window.confirm(`Are you sure you want to delete "${productToDelete.title}"?`);
      if (confirmDelete) {
        console.log('Deleting product:', productToDelete);
        this.api.deleteProduct(productId).subscribe(() => {
          this.products = this.products.filter(product => product.id !== productId);
          console.log(`Product with ID ${productId} deleted successfully.`);
          alert(`"${productToDelete.title}" has been deleted.`);
        });
      } else {
        console.log('Deletion canceled.');
      }
    }
  }

  openUpdatePanel(product: any) {
    this.selectedProduct = { ...product };
  }

  closeUpdatePanel() {
    this.selectedProduct = null;
  }


  updateProduct(updatedProduct: any) {
    console.log('Updated Product:', updatedProduct);
    if (!updatedProduct || !updatedProduct.id) {
      console.error('Invalid product received:', updatedProduct);
      return;
    }
    const index = this.products.findIndex(p => p.id === updatedProduct.id);

    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
      this.products = [...this.products];
    }
    this.closeUpdatePanel();
  }




}
