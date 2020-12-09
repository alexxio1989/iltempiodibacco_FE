import { SubDominio } from './SubDominio';


export class Prodotto{

    id: number;
    nomeProdotto: string;
    descrizione: string;
    prezzo: number;
    tipo: SubDominio = new SubDominio();
    image: string;
    qntRimanente: number;
    panelOpenState: boolean;
    edit: boolean;
    qnt: number;
}