import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {
  usuario: Usuario;
  error: boolean;

  form: FormGroup;
  nombre = new FormControl('');
  payload = '';

  constructor(private usuarioService: UsuariosService) { }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.nombre.value)
        .subscribe(
          usuario => this.usuario = usuario,
          error => this.error = true,
          () => this.error = false
    );
  }

  ngOnInit() {
  }

}
