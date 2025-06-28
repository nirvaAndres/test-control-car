import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment } from './assessment';

describe('Assessment', () => {
  let component: Assessment;
  let fixture: ComponentFixture<Assessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assessment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assessment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
