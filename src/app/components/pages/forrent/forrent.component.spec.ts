import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForrentComponent } from './forrent.component';

describe('ForrentComponent', () => {
  let component: ForrentComponent;
  let fixture: ComponentFixture<ForrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
