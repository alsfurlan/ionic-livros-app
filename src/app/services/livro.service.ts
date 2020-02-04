import { Injectable } from '@angular/core';
import { Livro } from "../models/livro.model";
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
    return (livro && livro.id) ? this.atualizar(livro) : this.adicionar(livro);
  }

  private atualizar(livro: Livro) {
    return this.http.put(`${this.uri}/${livro.id}`, livro);
  }

  private adicionar(livro: Livro) {
    return this.http.post(`${this.uri}`, livro);
  }

  excluir(livro: Livro) {
    return this.http.delete(`${this.uri}/${livro.id}`);
  }

  getLivro(id: string) {
    return this.http.get<Livro>(`${this.uri}/${id}`);
  }
}

