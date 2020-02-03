import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro.model';
import { LivroService } from "../services/livro.service";
import { AlertController, NavController } from '@ionic/angular';
import { IonItemSliding } from "@ionic/angular";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

  public livros: Livro[];

  constructor(
    private livroService: LivroService,
    private alertController: AlertController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.listar();
  }

  listar() {
    this.livroService.getLivros().subscribe(livros => this.livros = livros);
  }

  async exclusao(livro: Livro, slidingItem: IonItemSliding) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o livro ${livro.nome}?`,
      buttons: [{
        text: 'Sim',
        handler: () => this.excluir(livro)
      }, {
        text: 'Não',
        handler: () => slidingItem.close()
      }]
    });
    alert.present();
  }

  excluir(livro:Livro) {
    this.livroService.excluir(livro).subscribe(() => this.listar());
  }

  editar(livro: Livro, slidingItem: IonItemSliding) {
    this.navController.navigateForward([`livros/cadastro/${livro.id}`]);    
    slidingItem.close();
  }
}
