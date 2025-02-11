import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit,AfterContentChecked,OnDestroy {


  constructor() {
    console.log("constructor");
  }
  ngOnInit(): void {
      console.log("ngOnInit")
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit", performance.now());
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
      console.log("afterContentInit")
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
  }
  ngOnDestroy(): void {
      console.log("ngOnDestroy")
  }

}
// Life Cycle Flow:
// constructor()
// ngOnChanges()
// ngOnInit()
// ngDoCheck()
// ngAfterContentInit()
// ngAfterContentChecked()
// ngAfterViewInit()
// ngAfterViewChecked()
// ngOnDestroy()
