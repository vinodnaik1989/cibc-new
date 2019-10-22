import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2dComponent } from './home2d.component';

describe('Home2dComponent', () => {
  let component: Home2dComponent;
  let fixture: ComponentFixture<Home2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
