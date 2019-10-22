import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2bComponent } from './home2b.component';

describe('Home2bComponent', () => {
  let component: Home2bComponent;
  let fixture: ComponentFixture<Home2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
