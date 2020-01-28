import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, AfterContentChecked, AfterViewInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { Autor } from '../models/autor.model';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit  {
  
  public autores: Autor[];
  
  constructor(
    private autorService:AutorService,
    private navController:NavController,
    private alertControler: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listar();
  }

  editar(autor:Autor) {
    this.navController.navigateForward([`/autores/cadastro/${autor.id}`]);
  }

  excluir(autor:Autor) {
    this.alertControler.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o autor ${autor.nome}?`,
      buttons: [{
        text: 'Cancelar'
      }, {
        text: 'Excluir',
        handler: () => {
          this.autorService.excluir(autor);
          this.listar();
        }
      }]
    }).then((alert) => alert.present());
  }

  listar() {
    this.autores = this.autorService.getAutores();
  }
}
