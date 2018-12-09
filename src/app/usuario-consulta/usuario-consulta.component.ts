import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuariosService) { }

  getUsuario(nombre: string): void {
    this.usuarioService.getUsuario(nombre)
        .subscribe(usuario => this.usuario = usuario);
  }

  ngOnInit() {
  }

}
