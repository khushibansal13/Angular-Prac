import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArray: any[] = [];

  constructor(private custsrv: CustomerService) {
    this.getCustomer();
  }

  // getCustomer() {
  //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers")
  //    .subscribe((res: any) => {
  //       this.customerArray = res.data;
  //     })
  // }

  getCustomer() {
    this.custsrv.loadCustomers().subscribe((res: any) => {
      this.customerArray = res.data;
    })
  }

  onSaveCustomer() {
    this.custsrv.createNewCustomer(this.customerObj).subscribe((res:any)=> {
      if(res.result) {
        alert("Customer created successfully");
        this.getCustomer();
      } else {
        alert(res.message);
      }
    })
  }

}
