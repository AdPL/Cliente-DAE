import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioSearchComponent } from './usuario-search/usuario-search.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioRegistrarComponent } from './usuario-registrar/usuario-registrar.component';
import { EventosOrganizadorComponent } from './eventos-organizador/eventos-organizador.component';
import { EventosAsistenteComponent } from './eventos-asistente/eventos-asistente.component';
import { EventoConsultaComponent } from './evento-consulta/evento-consulta.component';
import { EventosCrearComponent } from './eventos-crear/eventos-crear.component';
import { UsuarioInscribirComponent } from './usuario-inscribir/usuario-inscribir.component';
import { EventoCancelarComponent } from './evento-cancelar/evento-cancelar.component';
import { EventosListaComponent } from './eventos-lista/eventos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EventoCancelarComponent,
    EventosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
