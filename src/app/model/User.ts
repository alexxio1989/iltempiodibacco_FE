import { Dominio } from './Dominio';
import { Recapito } from './Recapito';

export class User{
    id: number;
    email: string;
    password: string;
    passwordConferma: string;
    nome: string;
    cognome: string;
    recapito: Recapito = new Recapito();
    tipoUtente: Dominio = new Dominio();
    
}