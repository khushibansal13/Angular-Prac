import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("khushi");
  lastName = signal<string>("Bansal");

  courseName: string = "Angular";
  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      // debugger;
      this.courseName = "React";
      this.firstName.set("Rahul");
      // debugger;
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update(oldValue => oldValue + 1);
  }

}
