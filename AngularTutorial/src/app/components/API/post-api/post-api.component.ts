import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../../reusable/tabs/tabs.component";
import { Car, ICarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList: ICarList[] = [];

  @ViewChild('txtCity') cityTextBox : ElementRef | undefined;

  @ViewChild(TabsComponent) myTabviewChild!: TabsComponent;

  carObj: Car = new Car();

  http = inject(HttpClient);
  currentTab: string = '';

  readCity() {
    const city = this.cityTextBox?.nativeElement.value;
    if (this.cityTextBox) {
      this.cityTextBox.nativeElement.style.backgroundColor = "red";
    }
    const val = this.myTabviewChild.currentTab;
  }

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
        this.carObj = new Car();
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

  onTabChange(tabName: string)  {
    this.currentTab = tabName;
  }
}
