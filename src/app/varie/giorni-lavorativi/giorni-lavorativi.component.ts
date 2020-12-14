import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GiorniEnums } from 'src/app/enums/GiorniEnums';
import { GiornoLavorativo } from 'src/app/model/GiornoLavorativo';

@Component({
  selector: 'app-giorni-lavorativi',
  templateUrl: './giorni-lavorativi.component.html',
  styleUrls: ['./giorni-lavorativi.component.css']
})
export class GiorniLavorativiComponent implements OnInit {

  giorniSettimanali = GiorniEnums.giorni;
  listGiornoLavorativo: GiornoLavorativo[] = [];

  //@Output() giorniEmitter = new EventEmitter<GiornoLavorativo[]>();

  constructor() { }

  ngOnInit(): void {
    this.giorniSettimanali.forEach(giorno => {
      let newGiornoLavorativo = new GiornoLavorativo();
      newGiornoLavorativo.day = giorno.codice;
      newGiornoLavorativo.descrizione = giorno.descrizione;
      this.listGiornoLavorativo.push(newGiornoLavorativo);
    });
  }

}
