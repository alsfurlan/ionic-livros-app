import { Autor } from './autor.model';

export class Livro {
    id: string;
    nome: string;
    isbn: string;
    autores: Autor[];
    paginas: number;
    preco: number; 
    imagem: string;
    
    constructor(id?: string, nome?: string, isbn?: string, paginas?:number, preco?:number, autores?: Autor[], imagem?: string) {
        this.id = id;
        this.nome = nome;
        this.isbn = isbn;
        this.paginas = paginas;
        this.preco = preco;
        this.autores = autores;
        this.imagem = imagem;
    }
}