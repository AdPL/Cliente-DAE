import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAsistenteComponent } from './eventos-asistente.component';

describe('EventosAsistenteComponent', () => {
  let component: EventosAsistenteComponent;
  let fixture: ComponentFixture<EventosAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
