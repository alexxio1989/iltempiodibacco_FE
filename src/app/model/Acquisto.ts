import { Prodotto } from './Prodotto';

export class Acquisto{

    id: number;
    prodotti: Prodotto[];
    codiceAquisto: string;
    dataAcquisto: Date;
    totale: number;

}