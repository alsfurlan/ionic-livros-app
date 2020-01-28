
import { Injectable } from '@angular/core';
import { Autor } from "../models/autor.model";

@Injectable({ providedIn: 'root' })
export class AutorService {

    static contador = 3;

    private autores: Autor[];

    constructor() {
        const a1 = new Autor(1, 'Douglas Cockford');
        const a2 = new Autor(2, 'David Flanagan');
        this.autores = [a1, a2];
    }

    public getAutores() {
        return [...this.autores];
    }

    public salvar(autor: Autor) {
        if(autor && autor.id) {
            this.atualizar(autor);
        } else {
            this.adicionar(autor);
        }
    }

    private atualizar(autor: Autor) {
        const index = this.autores.findIndex((a) => a.id === autor.id);            
        this.autores[index] = autor;
    }

    private adicionar(autor: Autor) {
        autor.id = AutorService.contador++;
        this.autores = [...this.autores, autor];
    }
 
    public excluir(autor: Autor) {
        this.autores = this.autores.filter((a) => a.id !== autor.id);
    }

    public getAutor(id: number) {
        return { ...this.autores.find((a) => a.id === id) };
    }
}
