import { Prodotto } from './Prodotto';

export class SubDominio{

    id: number;
    codice: string;
    descrizione: string;
    idPadre: number;
    prodottiAssociati: Prodotto[];
}