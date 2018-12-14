import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoConsultaComponent } from './evento-consulta/evento-consulta.component';
import { EventosListaComponent } from './eventos-lista/eventos-lista.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { UsuarioRegistrarComponent } from './usuario-registrar/usuario-registrar.component';

const routes: Routes = [
  { path: 'consulta', component: EventoConsultaComponent },
  { path: 'eventos', component: EventosListaComponent },
  { path: 'usuarios/:nombre', component: UsuarioConsultaComponent },
  { path: 'registro', component: UsuarioRegistrarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
