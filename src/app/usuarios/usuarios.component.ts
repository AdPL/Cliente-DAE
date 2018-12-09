import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuariosService) { }

  getUsuario(nombre: string): void {
    this.usuarioService.getUsuario(nombre)
        .subscribe(usuario => this.usuario = usuario);
  }

  ngOnInit() {
    this.getUsuario('adpl');
  }

}
