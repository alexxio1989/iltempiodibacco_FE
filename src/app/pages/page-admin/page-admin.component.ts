import { Component, OnInit } from '@angular/core';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';
import { ProdottoServiceService } from 'src/app/service/prodotto-service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  negozi: Negozio[];
  prodotti: Prodotto[];

  constructor(private ps: ProdottoServiceService , private ns: NegozioServiceService , private ds: DelegateServiceService) {
    this.ps.getOBSGetAll().subscribe(next => {
      this.prodotti = next.list;
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });

    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });
  }

  ngOnInit(): void {
  }

}
