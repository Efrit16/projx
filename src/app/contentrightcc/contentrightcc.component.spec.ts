import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentrightccComponent } from './contentrightcc.component';

describe('ContentrightccComponent', () => {
  let component: ContentrightccComponent;
  let fixture: ComponentFixture<ContentrightccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentrightccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentrightccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
