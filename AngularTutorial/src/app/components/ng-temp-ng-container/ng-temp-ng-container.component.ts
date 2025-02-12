import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {

  employeeArray: any[] = [
    {empId:121, isActive:false, name: 'AAA', city:'Pune',contactNo: '111111111', attendance:40},
    {empId:122, isActive:true, name: 'BBB', city:'Mumbai',contactNo: '222222222', attendance:60},
    {empId:123, isActive:false, name: 'CCC', city:'Nagpur',contactNo: '333333333', attendance:80},
    {empId:124, isActive:false, name: 'DDD', city:'Jaipur',contactNo: '444444444', attendance:90},
    {empId:125, isActive:true, name: 'EEE', city:'Thane',contactNo: '555555555', attendance:70}
  ]

  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
  }
}
