import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarmedicosComponent } from './cadastrarmedicos.component';

describe('CadastrarmedicosComponent', () => {
  let component: CadastrarmedicosComponent;
  let fixture: ComponentFixture<CadastrarmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarmedicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
