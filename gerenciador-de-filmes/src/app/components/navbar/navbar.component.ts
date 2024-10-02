import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavBar } from './models/link-navbar';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public colapsarNavbar: boolean = false;

  public linksNavbar: LinkNavBar[] = [
    { href:"#filmes", texto:"Filmes" },
    // { href:"#habilidades", texto:"Minhas Habilidades" },
    // { href:"#stack", texto:"Stacks" },
    // { href:"#experiencias", texto:"Experiências" },
    // { href:"#portifolio", texto:"Portifólio" }
  ];
}
