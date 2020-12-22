import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Negozio } from 'src/app/model/Negozio';
import { Prodotto } from 'src/app/model/Prodotto';
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

  constructor(private ns: NegozioServiceService , private ds: DelegateServiceService) {
    this.ns.getOBSGetAll().subscribe(next => {
      this.negozi = next.list;
      this.ds.updateNegozi(this.negozi);
      localStorage.removeItem('NEGOZI');
      localStorage.setItem('NEGOZI', JSON.stringify(next.list))
      this.ds.updateResultService(next.status);
      this.ds.updateSpinner(false);
    });
  }

  ngOnInit(): void {
  }

  changeNegozio(negozio: Negozio){
    this.negozioSelected = negozio;
  } 

}
