import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagevalidationComponent } from './pagevalidation.component';

describe('PagevalidationComponent', () => {
  let component: PagevalidationComponent;
  let fixture: ComponentFixture<PagevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
