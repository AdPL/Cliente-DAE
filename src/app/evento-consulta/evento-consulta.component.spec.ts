import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoConsultaComponent } from './evento-consulta.component';

describe('EventoConsultaComponent', () => {
  let component: EventoConsultaComponent;
  let fixture: ComponentFixture<EventoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
