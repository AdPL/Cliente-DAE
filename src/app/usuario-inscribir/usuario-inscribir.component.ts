import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-usuario-inscribir',
  templateUrl: './usuario-inscribir.component.html',
  styleUrls: ['./usuario-inscribir.component.css']
})
export class UsuarioInscribirComponent implements OnInit {
  evento: Evento;
  error: boolean;

  titulo = new FormControl('');
  nombre = new FormControl('');

  constructor(private eventosService: EventosService) { }

  inscribirAsistente(): void {
    this.eventosService.inscribirAsistente(this.titulo.value, this.nombre.value)
        .subscribe(
          evento => this.evento = evento,
          error => this.error = true,
          () => this.error = false
        )
  }

  ngOnInit() {
  }

}
