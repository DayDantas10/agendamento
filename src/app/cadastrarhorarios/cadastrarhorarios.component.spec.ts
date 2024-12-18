import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarhorariosComponent } from './cadastrarhorarios.component';

describe('CadastrarhorariosComponent', () => {
  let component: CadastrarhorariosComponent;
  let fixture: ComponentFixture<CadastrarhorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarhorariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
