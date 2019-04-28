import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarbonComponent } from './new-carbon.component';

describe('NewCarbonComponent', () => {
  let component: NewCarbonComponent;
  let fixture: ComponentFixture<NewCarbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
