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
  livro: Livro = {
    nome: '',
    isbn: '',
    autores: [],
    paginas: 0,
    preco: 0,
    imagem: ''
  };;

  constructor(
    private autorService: AutorService,
    private livroService: LivroService,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inicializar();
    this.carregarAutores();
  }

  carregarAutores() {
    this.autorService.getAutores().subscribe(autores => this.autores = autores);
  }

  private inicializar() {
    const id = this.activatedRoute.snapshot.params.id;
    if(id) {
      this.livroService.getLivro(id).subscribe(l => this.livro = l);
    } 
  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  salvar() {
    this.livroService.salvar(this.livro).subscribe(() => this.redirecionarLivros());
  }

  redirecionarLivros() {
    this.navController.navigateForward(['livros']);
  }

}
