import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: String = "Khushi";
  rollNo: number = 33;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Enter Full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor(private router: Router) {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive)

  }

  navigateToAdmin() {
    this.router.navigateByUrl("/admin")
  }

  showWelcomeMessage() {
    alert("Welcome to Data Binding Component - " + this.firstName)
  }
  onCityChange() {
    console.log("City Selected: ");
    this.div1ClassName = "bg-warning";
  }

}
