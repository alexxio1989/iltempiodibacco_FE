import { Dominio } from './Dominio';
import { Prodotto } from './Prodotto';

export class SubDominio{

    id: number;
    codice: string;
    descrizione: string;
    idPadre: number;
    tipoPadre: Dominio = new Dominio();
    prodottiAssociati: Prodotto[];

    pageIndex: number = 0;
    pageSize: number = 2;
    lowValue: number = 0;
    highValue: number = 2;
    editSubTipo: boolean;
}