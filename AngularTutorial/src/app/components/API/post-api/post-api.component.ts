import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList: any[] = [];
  carObj: any = {
      "carId": 0,
      "brand": "",
      "model": "",
      "year": "",
      "color": "",
      "dailyRate": "",
      "carImage": "",
      "regNo": ""

  }

  http = inject(HttpClient);

  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
      this.carList = res.data;
    })
  }

  onSaveCar() {
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((res:any) => {
      if(res.result) {
        alert("Car created successfully")
        this.getAllCars();
      } else{
        alert(res.message)
      }
    })
  }

  updateCar() {
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((res:any) => {
      if(res.result) {
        alert("Car updated successfully");
        this.getAllCars();
      } else{
        alert(res.message)
      }
    })
  }

  onEdit(data: any) {
    this.carObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete == true) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res:any) => {
        if(res.result) {
          alert("Car deleted successfully");
          this.getAllCars();
        } else{
          alert(res.message)
        }
      })
    }
  }
}
