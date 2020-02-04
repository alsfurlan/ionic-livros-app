import { Autor } from './autor.model';

export interface Livro {
    id?: string;
    nome: string;
    isbn: string;
    autores: Autor[];
    paginas: number;
    preco: number; 
    imagem: string;
}