import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'http://localhost:8080/app/usuarios';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`UsuariosService: ${message}`);
  }

  getUsuario(nombre: string): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${nombre}`;
    this.log('user loaded')
    return this.http.get<Usuario>(url)
  }

  searchUser(nombre: string): Observable<Usuario[]> {
    if ( !nombre.trim() ) {
      return of([]);
    }
    return this.http.get<Usuario[]>(`${this.usuariosUrl}/${nombre}`);
  }
}
