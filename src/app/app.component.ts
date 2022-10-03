import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stock-funda';
  ratio1 = 0;
  ratio2 = 0;
  cmp = 0;

  getAverage() {
    return;
  }

  clearFields() {
    return;
  }
}
