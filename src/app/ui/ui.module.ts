import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioConsultaComponent } from '../usuario-consulta/usuario-consulta.component';
import { MessagesComponent } from '../messages/messages.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioRegistrarComponent } from '../usuario-registrar/usuario-registrar.component';
import { EventosOrganizadorComponent } from '../eventos-organizador/eventos-organizador.component';
import { EventosAsistenteComponent } from '../eventos-asistente/eventos-asistente.component';
import { EventoConsultaComponent } from '../evento-consulta/evento-consulta.component';
import { EventosCrearComponent } from '../eventos-crear/eventos-crear.component';
import { UsuarioInscribirComponent } from '../usuario-inscribir/usuario-inscribir.component';
import { EventoCancelarComponent } from '../evento-cancelar/evento-cancelar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioConsultaComponent,
    MessagesComponent,
    UsuariosComponent,
    UsuarioRegistrarComponent,
    EventosOrganizadorComponent,
    EventosAsistenteComponent,
    EventoConsultaComponent,
    EventosCrearComponent,
    UsuarioInscribirComponent,
    EventoCancelarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
