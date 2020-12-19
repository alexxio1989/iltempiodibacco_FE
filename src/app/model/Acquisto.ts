import { ModPagamento } from './ModPagamento';
import { Negozio } from './Negozio';
import { Prodotto } from './Prodotto';

export class Acquisto{

    id: number;
    prodotti: Prodotto[];
    codiceAquisto: string;
    dataAcquisto: Date;
    totale: number;
    dataRitiro: Date;
    modalitaPagamento: ModPagamento;
    negozioRitiro: Negozio;
    stripeToken: string;
    idUtente: number;
    status: string;

}