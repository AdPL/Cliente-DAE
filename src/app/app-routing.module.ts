import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoConsultaComponent } from './evento-consulta/evento-consulta.component';
import { EventosListaComponent } from './eventos-lista/eventos-lista.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { UsuarioRegistrarComponent } from './usuario-registrar/usuario-registrar.component';
import { EventosCrearComponent } from './eventos-crear/eventos-crear.component';
import { EventosOrganizadorComponent } from './eventos-organizador/eventos-organizador.component';
import { EventosAsistenteComponent } from './eventos-asistente/eventos-asistente.component';
import { UsuarioInscribirComponent } from './usuario-inscribir/usuario-inscribir.component';

const routes: Routes = [
  { path: 'consulta', component: EventoConsultaComponent },
  { path: 'eventos', component: EventosListaComponent },
  { path: 'usuarios/:nombre', component: UsuarioConsultaComponent },
  { path: 'registro', component: UsuarioRegistrarComponent },
  { path: 'eventos/nuevo', component: EventosCrearComponent },
  { path: 'eventos/organizador', component: EventosOrganizadorComponent },
  { path: 'eventos/asistente', component: EventosAsistenteComponent },
  { path: 'eventos/inscripcion', component: UsuarioInscribirComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
