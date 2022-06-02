import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDebitNoteComponent } from './vehicle-debit-note.component';

describe('VehicleDebitNoteComponent', () => {
  let component: VehicleDebitNoteComponent;
  let fixture: ComponentFixture<VehicleDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDebitNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
