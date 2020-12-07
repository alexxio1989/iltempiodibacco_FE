import { Prodotto } from './Prodotto';


export class Magazino{
    id: number;
    prodottoSelected: Prodotto = new Prodotto();
    prodotti: Prodotto[];
    idNegozio: number;
}