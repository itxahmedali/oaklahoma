import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodalsComponent } from './loginmodals.component';

describe('LoginmodalsComponent', () => {
  let component: LoginmodalsComponent;
  let fixture: ComponentFixture<LoginmodalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmodalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmodalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
