import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyinnerComponent } from './propertyinner.component';

describe('PropertyinnerComponent', () => {
  let component: PropertyinnerComponent;
  let fixture: ComponentFixture<PropertyinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
