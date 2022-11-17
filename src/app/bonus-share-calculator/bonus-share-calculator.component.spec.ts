import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusShareCalculatorComponent } from './bonus-share-calculator.component';

describe('BonusShareCalculatorComponent', () => {
  let component: BonusShareCalculatorComponent;
  let fixture: ComponentFixture<BonusShareCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusShareCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusShareCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
