import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-evento-consulta',
  templateUrl: './evento-consulta.component.html',
  styleUrls: ['./evento-consulta.component.css']
})
export class EventoConsultaComponent implements OnInit {
  evento: Evento;
  error: boolean;

  titulo = new FormControl('');

  constructor(private eventosService: EventosService) { }

  getEventoTitulo(): void {
    this.eventosService.getEventoTitulo(this.titulo.value)
        .subscribe(
          evento => this.evento = evento,
          error => this.error = true,
          () => this.error = false
        );
  }

  ngOnInit() {
  }

}
