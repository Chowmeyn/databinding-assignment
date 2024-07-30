import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalStart(shownNumber: number) {
    if (shownNumber % 2 === 0) {
      this.evenNumbers.push(shownNumber);
    } else {
      this.oddNumbers.push(shownNumber);
    }
  }
}
