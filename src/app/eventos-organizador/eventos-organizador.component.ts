import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-eventos-organizador',
  templateUrl: './eventos-organizador.component.html',
  styleUrls: ['./eventos-organizador.component.css']
})
export class EventosOrganizadorComponent implements OnInit {
  eventos: Evento[];
  error: boolean;

  nombre = new FormControl('');

  constructor(private usuariosService: UsuariosService) { }

  getEventosOrganizador(): void {
    this.usuariosService.getEventosOrganizador(this.nombre.value)
        .subscribe(
          eventos => this.eventos = eventos,
          error => this.error = true,
          () => this.error = false
        );
  }

  ngOnInit() {
  }

}
