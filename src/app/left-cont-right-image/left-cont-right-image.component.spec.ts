import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContRightImageComponent } from './left-cont-right-image.component';

describe('LeftContRightImageComponent', () => {
  let component: LeftContRightImageComponent;
  let fixture: ComponentFixture<LeftContRightImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftContRightImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftContRightImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
