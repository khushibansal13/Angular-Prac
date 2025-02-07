import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1visible: boolean = true;

  number1: string = '';
  number2: string = '';

  hideDiv1() {
    this.div1visible = false;
  }
  showDiv1() {
    this.div1visible = true;
  }
}
