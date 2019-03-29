import { Usuario } from './usuario';

export class Evento {
  titulo: string;
  nMax: number;
  descripcion: string;
  localizacion: string;
  fecha: Date;
  tipo: number;
  organizador: Usuario;

  constructor(titulo: string, descripcion: string, localizacion: string, tipo: number, fecha: Date, nMax: number, organizador: Usuario) {
    this.titulo = titulo;
    this.nMax = nMax;
    this.descripcion = descripcion;
    this.localizacion = localizacion;
    this.fecha = fecha;
    this.tipo = tipo;
    this.organizador = organizador;
  }
}
