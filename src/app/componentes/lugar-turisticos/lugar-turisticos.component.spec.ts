import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarTuristicosComponent } from './lugar-turisticos.component';

describe('LugarTuristicosComponent', () => {
  let component: LugarTuristicosComponent;
  let fixture: ComponentFixture<LugarTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarTuristicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
