
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from "../models/autor.model";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutorService {

    uri: string;

    constructor(private httpClient: HttpClient) {
        this.uri = 'http://localhost:3000/autores';
    }

    getAutores() {
        return this.httpClient.get<Autor[]>(this.uri);
    }

    salvar(autor: Autor) {
        return (autor && autor.id) ? this.atualizar(autor): this.adicionar(autor);
    }

    private atualizar(autor: Autor) {
        return this.httpClient.put(`${this.uri}/${autor.id}`, autor);
    }

    private adicionar(autor: Autor) {
        return this.httpClient.post(this.uri, autor);
    }

    excluir(autor: Autor) {
        return this.httpClient.delete(`${this.uri}/${autor.id}`);
    }

    getAutor(id: number) {
        return this.httpClient.get<Autor>(`${this.uri}/${id}`);
    }
}
