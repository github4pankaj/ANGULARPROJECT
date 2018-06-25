import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicannimationComponent } from './basicannimation.component';

describe('BasicannimationComponent', () => {
  let component: BasicannimationComponent;
  let fixture: ComponentFixture<BasicannimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicannimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicannimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
