import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDetalhe } from './materia-detalhe';

describe('MateriaDetalhe', () => {
  let component: MateriaDetalhe;
  let fixture: ComponentFixture<MateriaDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
