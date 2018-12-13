import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-crear',
  templateUrl: './eventos-crear.component.html',
  styleUrls: ['./eventos-crear.component.css']
})
export class EventosCrearComponent implements OnInit {
  evento: Evento;
  error: boolean;

  titulo = new FormControl('');
  descripcion = new FormControl('');
  localizacion = new FormControl('');
  tipo = new FormControl('');
  fecha = new FormControl('');
  plazas = new FormControl('');

  constructor(private eventosService: EventosService) { }

  crearEvento(): void {
    let evento = new Evento(this.titulo.value, this.descripcion.value, this.localizacion.value, this.tipo.value, this.fecha.value, this.plazas.value);

    this.eventosService.crearEvento(evento)
        .subscribe(
          evento => this.evento = evento,
          error => this.error = true,
          () => this.error = false
        );
    }

  ngOnInit() {
  }

}
