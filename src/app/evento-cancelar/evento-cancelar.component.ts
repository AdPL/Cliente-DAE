import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-evento-cancelar',
  templateUrl: './evento-cancelar.component.html',
  styleUrls: ['./evento-cancelar.component.css']
})
export class EventoCancelarComponent implements OnInit {
  evento: Object;
  error: boolean;

  titulo = new FormControl('');

  constructor(private eventosService: EventosService) { }

  cancelarEvento(): void {
    this.eventosService.cancelarEvento(this.titulo.value)
        .subscribe(
          evento => this.evento = evento,
          error => this.error = true,
          () => this.error = false
        );
  }

  ngOnInit() {
  }

}
