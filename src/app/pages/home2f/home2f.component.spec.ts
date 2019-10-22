import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2fComponent } from './home2f.component';

describe('Home2fComponent', () => {
  let component: Home2fComponent;
  let fixture: ComponentFixture<Home2fComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
