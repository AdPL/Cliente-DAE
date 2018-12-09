import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioConsultaComponent } from '../usuario-consulta/usuario-consulta.component';
import { MessagesComponent } from '../messages/messages.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioRegistrarComponent } from '../usuario-registrar/usuario-registrar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioConsultaComponent,
    MessagesComponent,
    UsuariosComponent,
    UsuarioRegistrarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
