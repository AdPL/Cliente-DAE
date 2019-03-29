import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.css']
})
export class UsuarioSearchComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;
  private searchTerms = new Subject<string>();

  constructor(private usuarioService: UsuariosService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.usuarios$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.usuarioService.searchUser(term)),
    );
  }

}
