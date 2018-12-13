import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventosUrl = 'http://localhost:8080/app/eventos';

  constructor( private http: HttpClient ) { }

  getEventoTitulo(titulo: string): Observable<Evento> {
    const url = `${this.eventosUrl}/${titulo}`;
    return this.http.get<Evento>(url);
  }

  crearEvento(evento: Evento): Observable<Evento> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Evento>(this.eventosUrl, evento, httpOptions);
  }

  inscribirAsistente(titulo: string, nombre: string): Observable<Evento> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    decodeURI(titulo);
    const url = `${this.eventosUrl}/${titulo}/asistentes/${nombre}`;
    return this.http.post<Evento>(url, httpOptions);
  }

  cancelarEvento(titulo: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    decodeURI(titulo);
    const url = `${this.eventosUrl}/${titulo}`;
    return this.http.delete(url, httpOptions);
  }
}
