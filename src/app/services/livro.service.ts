import { Injectable } from '@angular/core';
import { Livro } from "../models/livro.model";
import { Autor } from "../models/autor.model";
import { AutorService } from "./autor.service";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  
  private livros: Livro[];
  
  constructor(private autorService: AutorService) { 

    const a1 = this.autorService.getAutor(1);
    const a2 = this.autorService.getAutor(2);
    
    const l1 = new Livro('JavaScript: The Good Parts', '9780596517748', 153, 75.00, [a1], 'assets/images/1.jpg');
    l1.id = '1';
    const l2 = new Livro('JavaScript: The Definitive Guide', '0596805527', 1078, 150.00, [a2], 'assets/images/2.jpg');
    l2.id = '2';
    
    this.livros = [l1, l2];
  }

  getLivros() {
    return [...this.livros];
  }

  salvar(livro: Livro) {
    const livroEncontrado = this.getLivro(livro.id);
    if(livroEncontrado) {
      this.atualizar(livroEncontrado, livro);
    } else {
      this.adicionar(livro);
    }
    
  }

  atualizar(livroEncontrado: Livro, livro: Livro) {
    livroEncontrado = livro;
  }
  
  adicionar(livro: Livro) {
    this.livros = [...this.livros, livro];
  }

  excluir(livro: Livro) {
    this.livros = this.livros.filter(l => l.id !== livro.id);
  }

  getLivro(id: string): Livro {
    return this.livros.find(l => l.id === id);
  }
  

}

