import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
import { DatiPaginaService } from 'src/app/service/dati-pagina.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';
import { NegozioServiceService } from 'src/app/service/negozio-service.service';
import { ProdottoServiceService } from 'src/app/service/prodotto-service.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  toppings = new FormControl();

  negozi: Negozio[];

  negozioSelected: Negozio;

  pageloaded: boolean;

  constructor(private ns: NegozioServiceService , private ds: DelegateServiceService , private dps: DatiPaginaService) {
    this.dps.getOBSDatiPageHome().subscribe(next => {
      this.negozi = next.list;
      this.ds.updateNegozi(this.negozi);
      this.pageloaded = true;
      this.ds.updateSpinner(false);
    },error=> {
      this.ds.updateResultService('Recupero dati pagina in errore');
      this.ds.updateSpinner(false);
    });
  }

  ngOnInit(): void {
  }

  changeNegozio(negozio: Negozio){
    this.negozioSelected = negozio;
  } 

}
