import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalWorkshop } from './mechanical-workshop';

describe('MechanicalWorkshop', () => {
  let component: MechanicalWorkshop;
  let fixture: ComponentFixture<MechanicalWorkshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechanicalWorkshop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicalWorkshop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
