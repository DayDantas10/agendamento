import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarespecialidadeComponent } from './cadastrarespecialidade.component';

describe('CadastrarespecialidadeComponent', () => {
  let component: CadastrarespecialidadeComponent;
  let fixture: ComponentFixture<CadastrarespecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarespecialidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarespecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
