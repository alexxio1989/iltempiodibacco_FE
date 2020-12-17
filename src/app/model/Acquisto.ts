import { Negozio } from './Negozio';
import { Prodotto } from './Prodotto';

export class Acquisto{

    id: number;
    negozio: Negozio;
    prodotti: Prodotto[];
    codiceAquisto: string;
    dataAcquisto: Date;
    totale: number;
    dataRitiro: Date;
    stripeToken: string;

}