import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmeService } from './service/filme.service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListagemFilmesComponent } from './components/listagem-filmes/listagem-filmes.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ListagemFilmesComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    registerLocaleData(localePtBr);
  }
}
