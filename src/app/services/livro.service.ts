import { Injectable } from '@angular/core';
import { Livro } from "../models/livro.model";
import { Autor } from "../models/autor.model";
import { AutorService } from "./autor.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000/livros'
  }

  getLivros() {
    const params = { _embed: 'autores' };
    return this.http.get<Livro[]>(`${this.uri}`, { params });
  }

  salvar(livro: Livro) {
    //const livroEncontrado = this.getLivro(livro.id);
    //if(livroEncontrado) {
    //this.atualizar(livroEncontrado, livro);
    //} else {
    //this.adicionar(livro);
    //}

  }

  atualizar(livroEncontrado: Livro, livro: Livro) {
    //livroEncontrado = livro;
  }

  adicionar(livro: Livro) {
    //this.livros = [...this.livros, livro];
  }

  excluir(livro: Livro) {
    //this.livros = this.livros.filter(l => l.id !== livro.id);
  }

  getLivro(id: string): Livro {
    //return this.livros.find(l => l.id === id);
    return null;
  }


}

