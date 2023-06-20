import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditacursoComponent } from './editacurso.component';

describe('EditacursoComponent', () => {
  let component: EditacursoComponent;
  let fixture: ComponentFixture<EditacursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditacursoComponent]
    });
    fixture = TestBed.createComponent(EditacursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
