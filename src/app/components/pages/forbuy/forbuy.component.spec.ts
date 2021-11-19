import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbuyComponent } from './forbuy.component';

describe('ForbuyComponent', () => {
  let component: ForbuyComponent;
  let fixture: ComponentFixture<ForbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
