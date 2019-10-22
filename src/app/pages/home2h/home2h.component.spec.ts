import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2hComponent } from './home2h.component';

describe('Home2hComponent', () => {
  let component: Home2hComponent;
  let fixture: ComponentFixture<Home2hComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2hComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
