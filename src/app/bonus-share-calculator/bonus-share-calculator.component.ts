import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-share-calculator',
  templateUrl: './bonus-share-calculator.component.html',
  styleUrls: ['./bonus-share-calculator.component.scss']
})
export class BonusShareCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAverage() {
    console.log('Average should be calculated');
    return;
  }

  clearFields() {
    console.log('Should clear all the fields');
    return;
  }

}
