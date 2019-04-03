import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBgComponent } from './head-bg.component';

describe('HeadBgComponent', () => {
  let component: HeadBgComponent;
  let fixture: ComponentFixture<HeadBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
