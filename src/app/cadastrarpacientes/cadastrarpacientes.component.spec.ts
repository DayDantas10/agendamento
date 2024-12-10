import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPacientesComponent } from './cadastrarpacientes.component';

describe('CadastrarpacientesComponent', () => {
  let component: CadastrarPacientesComponent;
  let fixture: ComponentFixture<CadastrarPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarPacientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
