import { NgClass } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  @Input() tabList: string[] = [];

  @Output() onTabClick = new EventEmitter<string>();

  currentTab: string = '';

  onTabChange(tabName: string) {
    this.currentTab = tabName;
    this.onTabClick.emit(tabName);
  }

}
