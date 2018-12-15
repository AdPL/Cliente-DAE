import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.css']
})
export class EventosListaComponent implements OnInit {
  eventos: Evento[];
  error: boolean;

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    this.eventosService.getEventos()
        .subscribe(
          eventos => this.eventos = eventos,
          error => this.error = true,
          () => this.error = false
        )
  }

}
