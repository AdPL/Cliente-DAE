import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInscribirComponent } from './usuario-inscribir.component';

describe('UsuarioInscribirComponent', () => {
  let component: UsuarioInscribirComponent;
  let fixture: ComponentFixture<UsuarioInscribirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioInscribirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
