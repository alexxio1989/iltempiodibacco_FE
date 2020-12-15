

export class GiornoLavorativo{
    id: number;
    idNegozio: number;
    day: number;
    descrizione: string;
    orarioApertura: String
    orarioPausaInizio: String
    orarioPausaFine: String
    orarioChiusura: String
    chiuso: boolean = true;
}
