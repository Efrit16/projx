import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsccComponent } from './selectorscc.component';

describe('SelectorsccComponent', () => {
  let component: SelectorsccComponent;
  let fixture: ComponentFixture<SelectorsccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorsccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorsccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
