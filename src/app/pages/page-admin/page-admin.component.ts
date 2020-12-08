import { Component, OnInit } from '@angular/core';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';
import { ProdottoServiceService } from 'src/app/service/prodotto-service.service';
import { TipoServiceService } from 'src/app/service/tipo-service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  negozi: Negozio[];
  mapProdotti: Map<string, Prodotto[]>;

  constructor(private ps: ProdottoServiceService ,
              private ns: NegozioServiceService , 
              private ds: DelegateServiceService , 
              private ts: TipoServiceService) {
    this.ps.getOBSGetAll().subscribe(next => {

      this.setMapProdotti(next);
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });

    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });
  } 

  private setMapProdotti(next: any) {
    if (next.list.length > 0) {
      this.mapProdotti = new Map<string, Prodotto[]>();
      next.list.forEach(value => {
        var newArray = next.list.filter(function (el) {
          return el.tipo.codice === value.tipo.codice;
        });
        this.mapProdotti.set(value.tipo.descrizione, newArray);
      });

    }
  }

  ngOnInit(): void {
  }

}
