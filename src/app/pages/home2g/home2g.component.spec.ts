import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2gComponent } from './home2g.component';

describe('Home2gComponent', () => {
  let component: Home2gComponent;
  let fixture: ComponentFixture<Home2gComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2gComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
