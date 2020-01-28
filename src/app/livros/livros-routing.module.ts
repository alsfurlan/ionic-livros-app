import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro/:id',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
