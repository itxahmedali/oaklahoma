import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleinnerComponent } from './articleinner.component';

describe('ArticleinnerComponent', () => {
  let component: ArticleinnerComponent;
  let fixture: ComponentFixture<ArticleinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
