import { Dominio } from './Dominio';
import { Prodotto } from './Prodotto';

export class SubDominio{

    id: number;
    codice: string;
    descrizione: string;
    idPadre: number;
    tipoPadre: Dominio = new Dominio();
    prodottiAssociati: Prodotto[];
}