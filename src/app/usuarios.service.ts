import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Evento } from './evento';
import { Usuario } from './usuario';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'https://localhost:8080/app/usuarios';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`UsuariosService: ${message}`);
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Usuario>(this.usuariosUrl, usuario, httpOptions);
  }

  identificarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.usuariosUrl}/identificar`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Usuario>(url, usuario, httpOptions);
  }

  getUsuario(nombre: string): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${nombre}`;
    this.log('user loaded')
    return this.http.get<Usuario>(url)
  }

  getEventosOrganizador(nombre: string): Observable<Evento[]> {
    const url = `${this.usuariosUrl}/${nombre}/organizador?celebrado=true`;
    return this.http.get<Evento[]>(url);
  }

  getEventosAsistente(nombre: string): Observable<Evento[]> {
    const url = `${this.usuariosUrl}/${nombre}/asistente?celebrado=true`;
    return this.http.get<Evento[]>(url);
  }

  searchUser(nombre: string): Observable<Usuario[]> {
    if ( !nombre.trim() ) {
      return of([]);
    }
    return this.http.get<Usuario[]>(`${this.usuariosUrl}/${nombre}`);
  }
}
