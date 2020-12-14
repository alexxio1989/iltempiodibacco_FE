import { Component, OnInit } from '@angular/core';
import { Dominio } from 'src/app/model/Dominio';
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
  listTipi: Dominio[];

  constructor(private ps: ProdottoServiceService,
    private ns: NegozioServiceService,
    private ds: DelegateServiceService,
    private ts: TipoServiceService) {

    

    this.getNegozi();
  }

  ngOnInit(): void {
  }

  adviceProdotto(event: boolean) {
    this.getTipi();
  }

  adviceNegozio(event: boolean) {
    this.getNegozi();
  }

  private getNegozi() {
    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      this.getTipi();
    });
  }

  private getTipi() {
    this.ts.getOBSGetAll().subscribe(next => {

      this.listTipi = next.list;
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });
  }



}
