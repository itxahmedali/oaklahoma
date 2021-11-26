import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompoComponent } from './test-compo.component';

describe('TestCompoComponent', () => {
  let component: TestCompoComponent;
  let fixture: ComponentFixture<TestCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
