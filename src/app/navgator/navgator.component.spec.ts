import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgatorComponent } from './navgator.component';

describe('NavgatorComponent', () => {
  let component: NavgatorComponent;
  let fixture: ComponentFixture<NavgatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
