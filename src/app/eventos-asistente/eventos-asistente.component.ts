import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../evento';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-eventos-asistente',
  templateUrl: './eventos-asistente.component.html',
  styleUrls: ['./eventos-asistente.component.css']
})
export class EventosAsistenteComponent implements OnInit {
  eventos: Evento[];
  error: boolean;

  nombre = new FormControl('');

  constructor(private usuariosService: UsuariosService) { }

  getEventosAsistente(): void {
    this.usuariosService.getEventosAsistente(this.nombre.value)
        .subscribe(
          eventos => this.eventos = eventos,
          error => this.error = true,
          () => this.error = false
        );
  }
  ngOnInit() {
  }

}
