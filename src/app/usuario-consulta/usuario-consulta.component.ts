import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {
  usuario: Usuario;
  error: boolean;

  param: string = "";

  form: FormGroup;
  nombre = new FormControl('');
  payload = '';

  constructor( private usuarioService: UsuariosService, private route: ActivatedRoute ) { }

  getDatosUsuario(nombre: string): void {
    this.usuarioService.getUsuario(nombre)
        .subscribe(
          usuario => this.usuario = usuario,
          error => this.error = true,
          () => this.error = false
    );
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.nombre.value)
        .subscribe(
          usuario => this.usuario = usuario,
          error => this.error = true,
          () => this.error = false
    );
  }

  ngOnInit() {
    this.param = this.route.snapshot.params.nombre;
    this.usuarioService.getUsuario(this.param)
        .subscribe(
          usuario => this.usuario = usuario
    );
  }
}
