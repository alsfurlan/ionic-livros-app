import { Component, OnInit, Inject } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';
import { NavController } from '@ionic/angular';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  autor: Autor;

  constructor(
    private autorService: AutorService,
    private navController : NavController,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id']);
    if(id) {
      this.autor = this.autorService.getAutor(id);      
    } else {
      this.autor = new Autor();
    }
  }

  salvar(){
    this.autorService.salvar(this.autor);
    this.navController.navigateForward(['autores']);    
  }

}
