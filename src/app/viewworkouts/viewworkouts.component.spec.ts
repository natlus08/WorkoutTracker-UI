import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewworkoutsComponent } from './viewworkouts.component';

describe('ViewworkoutsComponent', () => {
  let component: ViewworkoutsComponent;
  let fixture: ComponentFixture<ViewworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
