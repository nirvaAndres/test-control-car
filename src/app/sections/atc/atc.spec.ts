import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atc } from './atc';

describe('Atc', () => {
  let component: Atc;
  let fixture: ComponentFixture<Atc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
