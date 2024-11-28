import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarmedicosComponent } from './buscarmedicos.component';

describe('BuscarmedicosComponent', () => {
  let component: BuscarmedicosComponent;
  let fixture: ComponentFixture<BuscarmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarmedicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
