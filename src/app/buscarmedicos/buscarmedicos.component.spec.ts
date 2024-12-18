import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMedicosComponent } from './buscarmedicos.component';

describe('BuscarmedicosComponent', () => {
  let component: BuscarMedicosComponent;
  let fixture: ComponentFixture<BuscarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarMedicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
