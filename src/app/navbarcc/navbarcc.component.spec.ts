import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarccComponent } from './navbarcc.component';

describe('NavbarccComponent', () => {
  let component: NavbarccComponent;
  let fixture: ComponentFixture<NavbarccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
