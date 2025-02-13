import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-admin',
  imports: [RouterLink,ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private httpClient: HttpClient, private custService:CustomerService) {
    this.getUsers();
    this.custService.tokenReceived$.subscribe((res:boolean) => {
      if (res) {
        this.getUsers();
      }
    })

  }

  getUsers() {
    this.httpClient.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers')
    .subscribe((res:any) => {

    })
  }

}
