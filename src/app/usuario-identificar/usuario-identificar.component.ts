import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-identificar',
  templateUrl: './usuario-identificar.component.html',
  styleUrls: ['./usuario-identificar.component.css']
})
export class UsuarioIdentificarComponent implements OnInit {
  usuario: Usuario;
  error: boolean;

  constructor(private usuarioService: UsuariosService) { }

  nombre = new FormControl('');
  password = new FormControl('');

  identificarUsuario(): void {
    let usuario = new Usuario(this.nombre.value, '', this.password.value);
    this.usuarioService.identificarUsuario(usuario)
        .subscribe(
          usuario => this.usuario = usuario,
          error => this.error = true,
          () => this.error = false
        )

    if ( !this.error ) {
      sessionStorage.setItem('user', this.nombre.value);
    }
  }

  ngOnInit() {
  }

}
