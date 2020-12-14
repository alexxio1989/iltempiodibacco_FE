import { GiornoLavorativo } from './GiornoLavorativo';
import { Magazino } from './Magazino';
import { Recapito } from './Recapito';

export class Negozio{

    id: number;
    nome: string;
    magazino: Magazino = new Magazino();
    recapito: Recapito = new Recapito();
    giorniLavorativi: GiornoLavorativo[]
}