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
    this.livros = this.livroService.getLivros();
  }

  async exclusao(livro: Livro) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o livro ${livro.nome}?`,
      buttons: [{
        text: 'Cancelar'
      }, {
        text: 'Excluir',
        handler: () => this.excluir(livro)
      }]
    });
    alert.present();
  }

  excluir(livro:Livro) {
    this.livroService.excluir(livro);
    this.listar();
  }

  editar(livro: Livro, slidingItem: IonItemSliding) {
    this.navController.navigateForward([`livros/cadastro/${livro.id}`]);    
    slidingItem.close();
  }
}
