import { Component, OnInit } from '@angular/core';
import { utils } from 'protractor';
import { Carrello } from 'src/app/model/Carrello';
import { CarrelloServiceService } from 'src/app/service/carrello-service.service';
import { DelegateServiceService } from 'src/app/service/delegate-service.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  carrello: Carrello = new Carrello();

  tot: number = 0;

  public _step: number = 1;
  public _min: number = 0;
  public _max: number = Infinity;
  public _wrap: boolean = false;

  constructor(private cs: CarrelloServiceService , private ds: DelegateServiceService) {

    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
    })

    this.cs.getOBSCarrello().subscribe(next=>{
      this.carrello = next;
      this.carrello.prodotti.forEach(prodotto => {
        this.tot = (prodotto.qnt * prodotto.prezzo);
      })
    })

  }

  ngOnInit(): void {

    this.carrello = this.cs.getCarrello();
      this.carrello.prodotti.forEach(prodotto => {
        this.tot =  (prodotto.qnt * prodotto.prezzo);
      })

  }

  

}
