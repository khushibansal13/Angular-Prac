import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  div1BgColor: string = "";
  isChecked: boolean = false;

  myCss: any = {
    'background-color': 'red',
    'border': '1px solid black',
    'padding': '10px',
    'margin': '10px'
  }

  addDiv1Color(color:string) {
    this.div1BgColor = color;
  }
}
