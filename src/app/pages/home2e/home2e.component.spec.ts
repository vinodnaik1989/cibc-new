import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2eComponent } from './home2e.component';

describe('Home2eComponent', () => {
  let component: Home2eComponent;
  let fixture: ComponentFixture<Home2eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
