import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCancelarComponent } from './evento-cancelar.component';

describe('EventoCancelarComponent', () => {
  let component: EventoCancelarComponent;
  let fixture: ComponentFixture<EventoCancelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCancelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
