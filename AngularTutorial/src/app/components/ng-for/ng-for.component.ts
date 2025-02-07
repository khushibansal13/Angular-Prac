import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Pune", "Nagpur", "Mumbai", "Thane", "Jaipur"];

  employeeArray: any[] = [
    { empID: 121, name: "AAA", city: "Pune", contactNo: "99999999999" },
    { empID: 122, name: "BBB", city: "Nagpur", contactNo: "88888888888" },
    { empID: 123, name: "CCC", city: "Mumbai", contactNo: "77777777777" },
    { empID: 124, name: "DDD", city: "Thane", contactNo: "66666666666" },
    { empID: 125, name: "EEE", city: "Jaipur", contactNo: "55555555555" }
  ]

}

