import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private autores: Autor[];
  private livro: Livro;

  constructor(
    private autorService: AutorService,
    private livroService: LivroService,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  private inicializar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.livro = id ? this.livroService.getLivro(id) : new Livro();
  }

  ngOnInit() {
    this.inicializar();
    this.autores = this.autorService.getAutores();
  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  salvar() {
    this.livroService.salvar(this.livro);
    this.navController.navigateForward(['livros']);
  }

}
