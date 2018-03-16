import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndworkoutComponent } from './endworkout.component';

describe('EndworkoutComponent', () => {
  let component: EndworkoutComponent;
  let fixture: ComponentFixture<EndworkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndworkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
