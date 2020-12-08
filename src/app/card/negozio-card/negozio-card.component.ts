import { Component, Input, OnInit } from '@angular/core';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';

@Component({
  selector: 'app-negozio-card',
  templateUrl: './negozio-card.component.html',
  styleUrls: ['./negozio-card.component.css']
})
export class NegozioCardComponent implements OnInit {

  @Input() negozio: Negozio;

  mapProdotti: Map<string, Prodotto[]>;

  constructor() { }

  ngOnInit(): void {

    if(this.negozio.magazino.prodotti.length > 0){
      this.mapProdotti = new Map<string, Prodotto[]>();
      this.negozio.magazino.prodotti.forEach(value => {
        var newArray = this.negozio.magazino.prodotti.filter(function (el) {
          return el.tipo.codice === value.tipo.codice
        });
        this.mapProdotti.set(value.tipo.descrizione, newArray);
      });

     }
  }

}
