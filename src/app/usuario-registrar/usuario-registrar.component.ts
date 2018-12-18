import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.css']
})
export class UsuarioRegistrarComponent implements OnInit {
  usuario: Usuario;
  error: boolean;

  nombre = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private usuarioService: UsuariosService) { }

  registrarUsuario(): void {
    let usuario = new Usuario(this.nombre.value, this.email.value, this.password.value);
    this.usuarioService.registrarUsuario(usuario)
        .subscribe(
          usuario => this.usuario = usuario,
          error => this.error = true,
          () => this.error = false
        );
    if ( !this.error ) {
      sessionStorage.setItem('user', this.nombre.value);
    }
  }

  ngOnInit() {
  }

}
