import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.css']
})
export class UsuarioRegistrarComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuariosService) { }

  registrarUsuario(nombre: string, email: string, password: string): void {
    let usuario = new Usuario(nombre, email, password);
    this.usuarioService.registrarUsuario(usuario)
        .subscribe(
          usuario => this.usuario = usuario ,
          error => this.error = true,
          () => this.error = false
        );
  }

  ngOnInit() {
  }

}
