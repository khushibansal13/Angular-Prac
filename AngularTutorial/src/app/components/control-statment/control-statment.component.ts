import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statment',
  imports: [FormsModule],
  templateUrl: './control-statment.component.html',
  styleUrl: './control-statment.component.css'
})
export class ControlStatmentComponent {

  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  cityList: string [] = [
    "Pune",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Kolkata"
  ]

  employeeArray: any[] = [
    { empID: 121, name: "AAA", city: "Pune", contactNo: "99999999999" },
    { empID: 122, name: "BBB", city: "Nagpur", contactNo: "88888888888" },
    { empID: 123, name: "CCC", city: "Mumbai", contactNo: "77777777777" },
    { empID: 124, name: "DDD", city: "Thane", contactNo: "66666666666" },
    { empID: 125, name: "EEE", city: "Jaipur", contactNo: "55555555555" }
  ]


  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }
}
