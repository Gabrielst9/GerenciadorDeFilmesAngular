import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../service/filme.service';
import { ListagemFilme } from '../../models/listagem-filme.model';
import { formatDate, NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem-filmes',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, RouterLink],
  templateUrl: './listagem-filmes.component.html',
  styleUrl: './listagem-filmes.component.scss',
})
export class ListagemFilmesComponent implements OnInit {
  public filmes: ListagemFilme[];

  public carregandoListagem: boolean;

  private pagina: number;

  constructor(private filmeService: FilmeService) {
    this.filmes = [];
    this.pagina = 1;
    this.carregandoListagem = false;
  }

  ngOnInit(): void {
    this.buscarFilmesPopulares();
  }

  public buscarFilmesPopulares() {
    this.carregandoListagem = true;

    this.filmeService.selecionarFilmesPopulares(this.pagina).subscribe((f) => {
      const resultados = f.results as any[];

      const filmesMapeados = resultados.map(this.mapearListagemFilme);

      this.filmes.push(...filmesMapeados);

      this.pagina++;

      this.carregandoListagem = false;
    });
  }

  public mapearCorDaNota(porcentagemNota: string): string {
    const numeroNota = Number(porcentagemNota);

    if (numeroNota > 0 && numeroNota <= 30) return 'app-borda-nota-mais-baixa';
    else if (numeroNota > 30 && numeroNota <= 50) return 'app-borda-nota-baixa';
    else if (numeroNota > 50 && numeroNota <= 75) return 'app-borda-nota-media';
    else return 'app-borda-nota-alta';
  }

  private mapearListagemFilme(obj: any): ListagemFilme {
    return {
      id: obj.id,
      titulo: obj.title,
      lancamento: formatDate(obj.release_date, 'mediumDate', 'pt-BR'),
      urlImagem: 'https://image.tmdb.org/t/p/w300/' + obj.poster_path,
      porcentagemNota: (obj.vote_average * 10).toFixed(0),
    };
  }
}
