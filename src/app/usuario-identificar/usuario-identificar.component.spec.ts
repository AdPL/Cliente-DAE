import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIdentificarComponent } from './usuario-identificar.component';

describe('UsuarioIdentificarComponent', () => {
  let component: UsuarioIdentificarComponent;
  let fixture: ComponentFixture<UsuarioIdentificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioIdentificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIdentificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
