import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosOrganizadorComponent } from './eventos-organizador.component';

describe('EventosOrganizadorComponent', () => {
  let component: EventosOrganizadorComponent;
  let fixture: ComponentFixture<EventosOrganizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosOrganizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
