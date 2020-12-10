import { Dominio } from './Dominio';
import { Prodotto } from './Prodotto';


export class Magazino{
    id: number;
    prodottoSelected: Prodotto = new Prodotto();
    tipiAssociati: Dominio[];
    idNegozio: number;
}