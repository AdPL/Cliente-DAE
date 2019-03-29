import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { Usuario } from '../usuario';
import { EventosService } from '../eventos.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-eventos-crear',
  templateUrl: './eventos-crear.component.html',
  styleUrls: ['./eventos-crear.component.css']
})
export class EventosCrearComponent implements OnInit {
  evento: Evento;
  error: boolean;
  organizador: string;

  titulo = new FormControl('');
  descripcion = new FormControl('');
  localizacion = new FormControl('');
  tipo = new FormControl('');
  fecha = new FormControl('');
  plazas = new FormControl('');

  constructor(private eventosService: EventosService, private router: Router) { }

  crearEvento(): void {
    this.organizador = sessionStorage.getItem('user');
    let evento = new Evento(this.titulo.value, this.descripcion.value, this.localizacion.value, this.tipo.value, this.fecha.value, this.plazas.value, new Usuario(this.organizador, '', ''));

    this.eventosService.crearEvento(evento)
        .subscribe(
          evento => this.evento = evento,
          error => this.error = true,
          () => this.error = false
        );
    }

  ngOnInit() {
    console.warn(sessionStorage.getItem('user'));
    if ( sessionStorage.getItem('user') == null ) {
      this.router.navigate(['/']);
    }
  }

}
