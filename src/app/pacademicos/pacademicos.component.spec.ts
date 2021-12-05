import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacademicosComponent } from './pacademicos.component';

describe('PacademicosComponent', () => {
  let component: PacademicosComponent;
  let fixture: ComponentFixture<PacademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacademicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
